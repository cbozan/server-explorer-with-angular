import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  @ViewChild("signInForm") signInForm: NgForm;

  constructor(private loginService: LoginService,
              private router: Router) {

  }
  ngOnInit(): void {
  }

  onSignInSubmit() {
    const serverName = this.signInForm.value['serverName'];
    const password = this.signInForm.value['password'];

    console.log("serverName: ", serverName);
    console.log("password: ", password);

    this.signInForm.reset();

    this.loginService.signIn({serverName: serverName, password: password})
      .subscribe(responseData => {
        if (responseData == null) {
          console.log("Böyle bir sunucu yok, oluşturabilirisiniz...");
        } else if (responseData['metaData']['password'] !== password) {
          console.log('Parola yanlış.');
        } else {
          // CanActivate için değişken tanımla
          // ve router ile server sayfasına yönlendir.
        }
      });

    /*this.http.put('' + serverName + ".json", {pass: password})
      .subscribe( responseData => {
        console.log(responseData);
      })*/
  }

}
