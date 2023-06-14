import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DirectoryModel} from "./directory/directory.model";
import {DirectoryService} from "./directory/directory.service";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{
  serverName: string = "belirsiz";
  searchText: string = "";

  elements = [
    new DirectoryModel(1, "documents", "18/08/2022", 12),
    new DirectoryModel(2, "pictures", "23/02/2021", 23),
    new DirectoryModel(3, "desktop", "01/08/2023", 6),
    new DirectoryModel(4, "home", "12/11/2020", 35)
  ];

  constructor(private route: ActivatedRoute,
              public directoryService: DirectoryService) {
  }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.serverName = params['serverName'];
    })
  }

  search() {
    console.log(this.searchText);
  }

  sort(scope: string) {
    console.log("sorting with ", scope);
  }
}
