import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FlowersListComponent} from './flowers-list/flowers-list.component';
import {FlowersService} from './flowers-list/flowers.service';


@NgModule({
  declarations: [
    AppComponent,
    FlowersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FlowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
