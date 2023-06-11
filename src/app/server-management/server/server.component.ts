import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{
  serverName: string = "belirsiz";
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.serverName = params['serverName'];
    })
  }
}
