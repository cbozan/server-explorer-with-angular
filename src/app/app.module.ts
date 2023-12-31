import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ServerManagementComponent } from './server-management/server-management.component';
import { ServerComponent } from './server-management/server/server.component';
import { DirectoryComponent } from './server-management/server/directory/directory.component';
import {SortingPipe} from "./server-management/server/sorting.pipe";
import {FilterPipe} from "./server-management/server/filter.pipe";
import {ServerService} from "./server.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    ServerManagementComponent,
    ServerComponent,
    DirectoryComponent,
    SortingPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
