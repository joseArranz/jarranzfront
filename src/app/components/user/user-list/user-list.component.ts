import { Component, OnInit , ViewChild } from "@angular/core";
import { SelectionModel } from "@angular/cdk/collections";
import { UserService } from "../../../service/user.service";
import { User } from "../../../model/user.model";
import { MatTableDataSource , MatPaginator , MatSort} from "@angular/material";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  users;
  selection = new SelectionModel<User>(true, []);
  @ViewChild (MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ["select", "id", "name", "age", "salary"];
  constructor(private userService: UserService) {}

  ngOnInit() {
    debugger;
    this.userService.getUsers().then(users => {
      debugger;
      console.log(users);
      this.users = new MatTableDataSource<User>(users);
      this.users.paginator = this.paginator;
      this.users.sort = this.sort;
    });
    debugger;    
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
}
