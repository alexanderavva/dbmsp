import { Injectable } from '@angular/core';
import {DbmsServer, Iuseremailsubscription} from "./iuseremailsubscription";
import {Observable, of, throwError} from "rxjs";

import {environment} from "../../../../../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {AlertService} from "../../../../../services/user/alert.service";

@Injectable({
  providedIn: 'root'
})
export class UseremailsubscriptionsvcService {
  userSubscriptions  :Iuseremailsubscription  [] = [];
 dbmsservers: DbmsServer[] = [];
  constructor(private http: HttpClient, private alertSvc: AlertService) { }

  public clearCache(){
    this.userSubscriptions    = [];
    this.dbmsservers    = [];

  }
  public getUserEmailSSubscription(): Observable<Iuseremailsubscription[]> {


    console.log(" getUserEmailSSubscription ", this.userSubscriptions.length)
    if (this.userSubscriptions.length > 0) {
      console.log(" getUserEmailSSubscription this.databaseList.length ", this.userSubscriptions.length)
      return of(this.userSubscriptions);
    } else {
      return this.http.get<Iuseremailsubscription []/*any*/>(`${environment.apiUrl}/dbemail/fullList`).pipe(map(res => {

        this.userSubscriptions = res;
        console.log("getUserEmailSSubscription ", this.userSubscriptions)
        return res;
      }));


    }
  }
  public getServerList(): Observable<DbmsServer[]> {


    console.log(" getUserEmailSSubscription ", this.dbmsservers.length)
    if (this.dbmsservers.length > 0) {
      console.log(" getUserEmailSSubscription this.databaseList.length ", this.dbmsservers.length)
      return of(this.dbmsservers);
    } else {
      return this.http.get<DbmsServer []/*any*/>(`${environment.apiUrl}/dbemail/fullListServers`).pipe(map(res => {

        this.dbmsservers = res;
        console.log("get fullListServers ", this.dbmsservers)
        return res;
      }

      ),
        catchError((err, caught) => {
          console.log(err)
          this.alertSvc.error(err.message)
        return  throwError(err)
        })/**/);


    }
  }
}
