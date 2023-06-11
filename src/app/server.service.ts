import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {ServerModel} from "./server-management/server.model";

@Injectable()
export class ServerService {
  activeServerSubject: Subject<ServerModel> = new Subject<ServerModel>();

}
