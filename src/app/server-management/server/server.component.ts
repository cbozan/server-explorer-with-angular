import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DirectoryModel} from "./directory/directory.model";
import {DirectoryService} from "./directory/directory.service";
import {ServerModel} from "../server.model";
import {ServerService} from "../../server.service";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{
  serverName: string = "belirsiz";
  searchText: string = "";
  scope: string = "id";
  orderDirection: boolean = true;

  directories: DirectoryModel[];

  constructor(private route: ActivatedRoute,
              public directoryService: DirectoryService,
              private serverService: ServerService) {
  }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.serverName = params['serverName'];
    });

    this.directories = this.serverService.getDirectories();
    this.serverService.directoryRemovedSubject.subscribe( (directories) => {
      this.directories = directories;
    })
  }

  search(searchText: string) {
    this.searchText = searchText;
  }

  sort(scope: string) {
    if (this.scope === scope) {
      this.orderDirection = !this.orderDirection;
    } else {
      this.scope = scope;
      this.orderDirection = true;
    }
  }
}
