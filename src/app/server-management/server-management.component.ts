import {Component, OnDestroy, OnInit} from '@angular/core';
import {ServerModel} from "./server.model";
import {Subscription} from "rxjs";
import {ServerService} from "../server.service";

@Component({
  selector: 'app-server-management',
  templateUrl: './server-management.component.html',
  styleUrls: ['./server-management.component.css']
})
export class ServerManagementComponent implements OnInit{
  activeServer: ServerModel;


  constructor(private serverService: ServerService) {
  }

  ngOnInit(): void {
    this.activeServer = this.serverService.activeServer;
  }



}
