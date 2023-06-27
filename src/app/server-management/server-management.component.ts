import {Component} from '@angular/core';
import {ServerService} from "../server.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-server-management',
  templateUrl: './server-management.component.html',
  styleUrls: ['./server-management.component.css']
})
export class ServerManagementComponent{
  //
  //
  // constructor(private serverService: ServerService,
  //             private route: ActivatedRoute) {
  // }
  //
  //
  // serverControl(): boolean {
  //   if (!this.serverService.getActiveServer())
  //     return false;
  //
  //   let activeServerName = this.serverService.getActiveServer()['_serverName'];
  //   let requestServerName = this.route.snapshot.params['serverName'];
  //
  //   console.log("aServerName = ", activeServerName, ", rServerName= ", requestServerName);
  //   return activeServerName === requestServerName;
  //
  //   // console.log(this.route.snapshot.params['serverName'] === this.serverService.getActiveServer()?.serverName);
  //   // return false;
  //   // return this.route.snapshot.params['serverName'] === this.serverService.getActiveServer().serverName;
  // }

}
