import { Component } from '@angular/core';
import {ServerService} from "./server.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServerService]
})
export class AppComponent {

  constructor(public serverService: ServerService,
              private router: Router) {
  }
  logout() {
    this.serverService.setActiveServer(null);
    this.router.navigate(["/"]);
  }
}
