import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { User } from "../../../model/user.model";

@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.scss"]
})
export class UserCreateComponent {
  constructor(
    public dialogRef: MatDialogRef<UserCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User
  ) {
    debugger;
    console.log(this.user);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    debugger;
    this.dialogRef.close(this.user);
  }
}
