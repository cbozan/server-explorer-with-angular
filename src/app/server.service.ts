import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {ServerModel} from "./server-management/server.model";
import {DirectoryModel} from "./server-management/server/directory/directory.model";

@Injectable()
export class ServerService {
  activeServer: ServerModel;
  directoryRemovedSubject: Subject<DirectoryModel[]> = new Subject<DirectoryModel[]>();

  private directories: DirectoryModel[] = [

    new DirectoryModel(2, "pictures", "23/02/2021", 23),
    new DirectoryModel(3, "desktop", "01/08/2023", 6),
    new DirectoryModel(4, "home", "12/11/2020", 35),
    new DirectoryModel(1, "documents", "18/08/2022", 12),
  ];

  ngOnInit() {
    // this.directories = getData from firebase
  }

  getDirectories(): DirectoryModel[] {
    return this.directories.slice();
  }

  getDirectory(index: number) {
    return Object.assign({}, this.directories[index]);
  }

  setDirectory(index: number, directory: DirectoryModel) {
    this.directories[index] = directory;
  }

  deleteDirectory(index: number) {
    this.directories.splice(index, 1);
    this.directoryRemovedSubject.next(this.getDirectories());
  }

}
