import { Component } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent {
  isEditable: boolean = true;
  name: string = "";
  id: number = 0;
  date: string = "";
  fileCount: number = 0;

  elements = [
    {name: "akd", id: 1, date: "akdf", fileCount: 12},
    {name: "akd", id: 1, date: "akdf", fileCount: 12},
    {name: "akd", id: 1, date: "akdf", fileCount: 12},
    {name: "akd", id: 1, date: "akdf", fileCount: 12},
    {name: "akd", id: 1, date: "akdf", fileCount: 12},];


  explorer() {
    console.log("explorer function");
  }

  onEdit() {
    console.log("onEdit function");
  }

  onDelete() {
    console.log("onDelete function");
  }

  onSave() {
    console.log("onSave function");
  }

  onCancel() {
    console.log("onCancel function");
  }
}
