import {Injectable, OnInit} from "@angular/core";
import {User} from "../auth/user";

@Injectable()
export class UserService implements OnInit {

  currentUser: User = null;

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem("curUser"));
  }

  setCurrentUser(user: User): void {
    this.currentUser = user;
  }

  isAuthorized(): boolean {
    return this.currentUser !== null;
  }

}
