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

  signUp(serverData: ServerData): Promise<any> {

    return new Promise<any>( (resolve, reject) => {
      this.signIn(serverData).subscribe(responseData => {
        if (responseData === null) {
          this.http.put(myFirebaseUrl + serverData.serverName + '.json', {metaData: serverData})
            .subscribe(putData => {
              resolve(putData);
            })
        } else {
          reject("already");
        } // end else
      }); // end this.signIn.subscribe()
    }); // end return promise
  } // end signUp function
}

      /*
      if (responseData === null) {
        this.http.put( myFirebaseUrl + serverData.serverName + '.json', {metaData: serverData})
          .subscribe( putData => {
            return new Promise<any>( (resolve, reject) => {
              resolve(putData);
            });
          })
      } else {
        return new Promise<any>( (resolve, reject) => {
          reject("")
        })
      }

    })*/
