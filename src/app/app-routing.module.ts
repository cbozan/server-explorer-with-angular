import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {SignInComponent} from "./login/sign-in/sign-in.component";
import {SignUpComponent} from "./login/sign-up/sign-up.component";
import {ServerManagementComponent} from "./server-management/server-management.component";
import {ServerComponent} from "./server-management/server/server.component";

const appRouting: Routes = [
  {path: "", redirectTo: "/login/signIn", pathMatch: "full"},
  {path: "login", redirectTo: "/login/signIn", pathMatch: "full"},
  {path: "login", component: LoginComponent, children: [
      {path: "signIn", component: SignInComponent},
      {path: "signUp", component: SignUpComponent}
    ]},
  {path: "server-management", component: ServerManagementComponent /* children and canactivate */, children: [
      {path: ":serverName", component: ServerComponent}
    ]}
];
@NgModule({
  imports: [RouterModule.forRoot(appRouting)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
