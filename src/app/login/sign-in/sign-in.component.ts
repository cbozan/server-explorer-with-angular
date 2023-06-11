import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  @ViewChild("signInForm") signInForm: NgForm;
  ngOnInit(): void {
  }

  onSignInSubmit() {
    const serverName = this.signInForm.value['serverName'];
    const password = this.signInForm.value['password'];

    console.log("serverName: ", serverName);
    console.log("password: ", password);

    this.signInForm.reset();
  }

}
