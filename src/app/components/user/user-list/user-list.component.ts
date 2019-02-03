import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { SelectionModel } from "@angular/cdk/collections";
import { UserService } from "../../../service/user.service";
import { User } from "../../../model/user.model";
import { UserCreateComponent } from "../user-create/user-create.component";
import { UserDetailComponent } from "../user-detail/user-detail.component";
import { UserDeleteComponent } from "../user-delete/user-delete.component";
import { UserEditComponent } from "../user-edit/user-edit.component";

import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  users;
  selection = new SelectionModel<User>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = [
    "select",
    "id",
    "name",
    "age",
    "salary",
    "actions"
  ];
  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit() {
    this.userService.getUsers().then(users => {
      console.log(users);
      this.users = new MatTableDataSource<User>(users);
      this.users.paginator = this.paginator;
      this.users.sort = this.sort;
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.users.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.users.data.forEach(row => this.selection.select(row));
  }

  onEdit(id: string) {
    console.log("id edit");
    const dialogRef = this.dialog.open(UserEditComponent, {
      width: "250px",
      data: this.users.data.filter(user => user.id === id)[0]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      let rows = this.users.data;
      rows.filter(user => {
        if (user.id === id) {
          user = result;
        }
      });
      this.users.data = rows;
      this.users.filter = "";
    });
  }

  onDelete(id: string) {
    console.log("id delete");
    const dialogRef = this.dialog.open(UserDeleteComponent, {
      width: "250px",
      data: this.users.data.filter(user => user.id === id)[0]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      if (result) {
        debugger;
        let index = 0;
        for (; index < this.users.data.length; index++) {
          const user = this.users.data[index];
          if (user.id === result.id) {
            break;
          }
        }        
        let rows = this.users.data;
        rows.splice(index, 1);
        this.users.data = rows;
        this.users.filter = "";
      }
    });
  }

  onDetail(id: string) {
    console.log("id detail");
    const dialogRef = this.dialog.open(UserDetailComponent, {
      width: "250px",
      data: this.users.data.filter(user => user.id === id)[0]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  onDeleteSelected() {
    console.log("delete Selected");
    console.log(this.selection);
  }
  onCreate() {
    debugger;
    console.log("Create");
    const dialogRef = this.dialog.open(UserCreateComponent, {
      width: "250px",
      data: new User(0, "", 0, 0)
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger;
      console.log("The dialog was closed");
      let rows = this.users.data;
      rows.push(JSON.parse(JSON.stringify(result)));
      this.users.data = rows;
      this.users.filter = "";
    });
  }
}
