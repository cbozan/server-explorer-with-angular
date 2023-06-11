import {Component, OnDestroy, OnInit} from '@angular/core';
import {ServerModel} from "./server.model";
import {Subscription} from "rxjs";
import {ServerService} from "../server.service";

@Component({
  selector: 'app-server-management',
  templateUrl: './server-management.component.html',
  styleUrls: ['./server-management.component.css']
})
export class ServerManagementComponent implements OnInit, OnDestroy{
  activeServer: ServerModel;
  activeServerSubs: Subscription;

  constructor(private serverService: ServerService) {
  }

  ngOnInit(): void {
    console.log("init girildi");
    this.activeServerSubs = this.serverService.activeServerSubject.subscribe( (serverModel: ServerModel) => {
      this.activeServer = serverModel;
      console.log("Active Server: ", this.activeServer);
    });
  }

  ngOnDestroy(): void {
    this.activeServerSubs.unsubscribe();
    console.log("destroy");
  }


}
