import {Component, Input, OnInit} from '@angular/core';
import {DirectoryModel} from "./directory.model";
import {DirectoryService} from "./directory.service";
import {ServerService} from "../../../server.service";

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  @Input() directory: DirectoryModel;
  @Input() index: number;
  @Input() isEditable: boolean = false;

  name: string = "";
  id: number = 0;
  date: string = "";
  size: number = 0;

  constructor(private directoryService: DirectoryService,
              private serverService: ServerService) {
  }

  ngOnInit() {
    console.log("init: ", this.directory);
    this.name = this.directory.name;
    this.id = this.directory.id;
    this.date = this.directory.date;
    this.size = this.directory.size;
  }

  explorer() {
    console.log("explorer ", this.id);
  }

  onEdit() {
    console.log("onEdit function");
    this.directoryService.editableDirectory = this.directory;
  }

  onDelete() {
    this.serverService.deleteDirectory(this.index);
    console.log("onDelete function");
  }

  onSave() {
    this.directory.id = this.id;
    this.directory.name = this.name;
    this.directory.date = this.date;
    this.directory.size = this.size;

    this.serverService.setDirectory(this.index, this.directory);
    this.directoryService.editableDirectory = null;
    console.log("onSave function");
  }

  onCancel() {
    this.name = this.directory.name;
    this.id = this.directory.id;
    this.date = this.directory.date;
    this.size = this.directory.size;

    this.directoryService.editableDirectory = null;
  }
}
