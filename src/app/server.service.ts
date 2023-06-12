import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {ServerModel} from "./server-management/server.model";

@Injectable()
export class ServerService {
  activeServer: ServerModel;

}
