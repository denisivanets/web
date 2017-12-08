
import {Injectable, OnInit} from "@angular/core";
import {UserService} from "../user/user.service";
import {User} from "./user";

@Injectable()
export class AuthService implements OnInit {

  private _registeredUsers = [];

  ngOnInit(): void {
    this._registeredUsers = JSON.parse(localStorage.getItem("users"));
  }

  private _registeredUsers: User[];

  constructor(private userService: UserService) {
  }

  login(user: User): boolean {
    if (this._identify(user)) {
      this._updateLocalStorage();
      localStorage.setItem('curUser', JSON.stringify(user));
      this.userService.setCurrentUser(user);
      return true;
    } else {
      alert('Login failed');
      return false;
    }
  }

  logout():void {
    this.userService.setCurrentUser(null);
  }

  register(user: User): boolean {
    if (this._validateRegistration(user)) {
      this._registeredUsers.push(user);
      this.userService.setCurrentUser(user);
      return true;
    } else {
      alert('Failed registration');
      return false;
    }
  }

  private _identify(user: User) {
    for (let oneUser: User of this._registeredUsers) {
      if (user.login === oneUser.login) {
        return user.password === oneUser.password
      }
    }
    return false;
  }

  private _validateRegistration(user: User): boolean {
    for (let chUser: User of this._registeredUsers) {
      if (chUser.login === user.login) {
        return false;
      }
    }
    return true;
  }

  private _updateLocalStorage():void {
    localStorage.removeItem("users");
    localStorage.setItem("users", JSON.stringify(this._registeredUsers));
  }

}
