import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../service/user.service";
import { User } from "../../../model/user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService) {}

  ngOnInit() {
    /* this.user; */
    debugger;
    this.userService.getUsers().then(users => {
      debugger;
      console.log(users);
      this.users = users;
    });
    debugger;
  }

}
