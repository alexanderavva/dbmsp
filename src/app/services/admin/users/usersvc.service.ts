import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {IDbmsUser} from "../../../interfaces/admin/users/idbms-user";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersvcService {

  constructor(private http: HttpClient) {

  }
  users:IDbmsUser[]=[];


  // @ts-ignore
  public getUsers(): Observable<IDbmsUser[]> {
    console.log("rec getUsers")

    console.log("getDatabases():this.databaseList.length ", this.users.length)
    if (this.users.length > 0) {
      console.log(" tDatabases() this.databaseList.length ", this.users.length)
      return of(this.users);
    } else {
      return this.http.get<IDbmsUser []/*any*/>(`${environment.apiUrl}/dbmsusers/getAllusers`).pipe(map(res => {

        this.users = res;
        console.log("UsersvcService ", this.users)
        return res;
      }));


    }
  }


  public saveUser(user: IDbmsUser | undefined): Observable<any> {
    console.log("saveUser IDbmsUser svc" , user)
    return this.http.post(`${environment.apiUrl}/dbmsusers/updateUser`,  user);
    console.log("saveUser")
    this.users =[]

    }


  public createUser(user: IDbmsUser | undefined): Observable<any> {
    console.log("saveUser IDbmsUser svc" , user)
    this.users =[]
    return this.http.post(`${environment.apiUrl}/dbmsusers/createDbmsUser`,  user);
    console.log("saveUser")


  }
    /*
  public getAll() {



    return this.http.get<any>(`${environment.apiUrl}/pgsetting/full`);
  }*/
}
