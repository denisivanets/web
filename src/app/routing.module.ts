import {NgModule} from '@angular/core';
import {FlowersListComponent} from "./flowers-list/flowers-list.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {RouterModule} from "@angular/router";
import {LogoutComponent} from "./logout/logout.component";
import {FlowerInfoComponent} from "./flower-info/flower-info.component";

const states = [
  {path: 'flowers', component: FlowersListComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'flower-info/:id', component: FlowerInfoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(states)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: []
})
export class RoutingModule {
}
