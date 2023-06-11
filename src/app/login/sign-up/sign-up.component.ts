import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  @ViewChild('signUpForm') signUpForm: NgForm;

  constructor(private loginService: LoginService) {
  }
  ngOnInit(): void {
  }

  onSignUpSubmit() {
    const serverName = this.signUpForm.value['serverName'];
    const password = this.signUpForm.value['password'];
    const passwordAgain = this.signUpForm.value['passwordAgain'];

    console.log("serverName: ", serverName);
    console.log("password: ", password);
    console.log("passwordAgain: ", passwordAgain);

    if (password === passwordAgain) {
      this.loginService.signUp({serverName, password});
    } else {
      console.log("parolalar uyuşmuyor..");
    }



    this.signUpForm.reset();
  }



}
