
import {Component} from "@angular/core";
import {UserService} from "../user/user.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styles: [`
    .register {
      margin-right: 1%;
    }
  `]
})
export class HeaderComponent {

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
  }

  showLogout(): boolean {
    return this.userService.isAuthorized();
  }

  logout() {
    this.authService.logout();
  }

}
