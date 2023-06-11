import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {myFirebaseUrl} from './FirebaseUrl.model';


interface ServerData {
  serverName: string;
  password: string;
}

@Injectable()
export class LoginService{
  constructor(private http: HttpClient) {}

  signIn(serverData: ServerData) {
    return this.http.get(myFirebaseUrl + serverData.serverName + ".json");
  }

  signUp(serverData: ServerData) {
    this.signIn(serverData).subscribe( responseData => {
      if (responseData === null) {
        this.http.put( myFirebaseUrl + serverData.serverName + '.json', {metaData: serverData})
          .subscribe( putData => {
            console.log(putData);
          })
      } else {
        console.log("Böyle bir sunucu zaten var..");
      }
    })
  }
}
