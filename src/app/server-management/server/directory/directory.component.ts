import {Component, Input, OnInit} from '@angular/core';
import {DirectoryModel} from "./directory.model";
import {DirectoryService} from "./directory.service";

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  @Input() directory: DirectoryModel;
  @Input() isEditable: boolean = false;

  name: string = "";
  id: number = 0;
  date: string = "";
  size: number = 0;

  constructor(private directoryService: DirectoryService) {
  }

  ngOnInit() {
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
    // Silme işlemi servis üzerinde gerçekleştirilecek
    console.log("onDelete metodu, fakat etkisiz method");
  }

  onSave() {
    // Güncelleme işlemi servis üzerinde gerçekleştirilecek
    console.log("onSave metodu, fakat etkisiz method");
  }

  onCancel() {
    this.name = this.directory.name;
    this.id = this.directory.id;
    this.date = this.directory.date;
    this.size = this.directory.size;

    this.directoryService.editableDirectory = null;
  }
}
