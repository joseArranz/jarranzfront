import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { User } from "../../../model/user.model";

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<UserDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User
  ) {
    console.log(this.user);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    this.dialogRef.close(this.user);
  }
}
