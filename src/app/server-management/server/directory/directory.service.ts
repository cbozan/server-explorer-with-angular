import {Injectable} from "@angular/core";
import {DirectoryModel} from "./directory.model";

@Injectable({providedIn: "root"})
export class DirectoryService {
  editableDirectory: DirectoryModel;
}
