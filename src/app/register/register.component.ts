import {Component} from "@angular/core";
import {AuthService} from "../auth/auth.service";
import {User} from "../auth/user";
import {Router} from "@angular/router";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userInfo: User = {
    name: '',
    surname: '',
    login: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  register(): void {
    if (!this.validateUser()) {
      alert('Fill all fields');
      return;
    }
    if (this.authService.register(this.userInfo)) {
      this.router.navigate(['login']);
    }
      }

  validateUser(): boolean {
    if (this.userInfo.name === null) {
      return false;
    }
    if (this.userInfo.surname === null) {
      return false;
    }
    if (this.userInfo.login === null) {
      return false;
    }
    if (this.userInfo.password === null) {
      return false;
    }
    return true;
  }

}
