import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FlowersListComponent} from './flowers-list/flowers-list.component';
import {FlowersService} from './flowers-list/flowers.service';
import {FormsModule} from "@angular/forms";
import {RegisterComponent} from "./register/register.component";
import {HeaderComponent} from "./header/header.component";
import {UserService} from "./user/user.service";
import {AuthService} from "./auth/auth.service";
import {LoginComponent} from "./login/login.component";
import {RoutingModule} from "./routing.module";
import {LogoutComponent} from "./logout/logout.component";


@NgModule({
  declarations: [
    AppComponent,
    FlowersListComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [
    FlowersService,
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
