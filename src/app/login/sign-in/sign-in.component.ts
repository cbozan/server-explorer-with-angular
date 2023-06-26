import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginService} from "../login.service";
import {Router} from "@angular/router";
import {ServerService} from "../../server.service";
import {ServerModel} from "../../server-management/server.model";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy{

  @ViewChild("signInForm") signInForm: NgForm;

  constructor(private loginService: LoginService,
              private serverService: ServerService,
              private router: Router) {

  }
  ngOnInit(): void {
    console.log("SignIn login.......");

    if (this.serverService.getActiveServer()) {
      this.router.navigate(["server-management", this.serverService.getActiveServer()['_serverName']])
    }
    console.log("dış");
  }

  onSignInSubmit() {
    const serverName = this.signInForm.value['serverName'];
    const password = this.signInForm.value['password'];

    // console.log("serverName: ", serverName);
    // console.log("password: ", password);

    this.loginService.signIn({serverName: serverName, password: password})
      .subscribe(responseData => {
        if (responseData == null) {
          alert("Server not found! You can create a new server....");
          this.signInForm.reset();
          this.router.navigate(['/login/signUp']);
        } else if (responseData['metaData']['password'] !== password) {
          alert("Password is incorrect");
        } else { // password is correct
          this.signInForm.reset();
          const serverModel = new ServerModel(responseData['metaData']['serverName'],responseData['metaData']['password']);
          this.serverService.setActiveServer(serverModel);
          this.router.navigate(['server-management', responseData['metaData']['serverName']]);
        }
      });

    /*this.http.put('' + serverName + ".json", {pass: password})
      .subscribe( responseData => {
        console.log(responseData);
      })*/
  }

  ngOnDestroy() {
    console.log("SignIn Destroy.....");
  }

}
