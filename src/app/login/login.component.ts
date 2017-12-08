
import {Component} from "@angular/core";
import {AuthService} from "../auth/auth.service";
import {User} from "../auth/user";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: [`
  .login-block {
    margin-top: 10%
  }
  .login-btn {
   width: 40%;
   margin: 5% 0 0 30%;
  }
  `]
})
export class LoginComponent {
  user: User = {
    name: null,
    surname: null,
    login: null,
    password: null
  };

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  login() {
    if (this.authService.login(this.user)) {
      this.router.navigate(['flowers']);
    } else {
      alert('Failed login');
    }
  }

}
