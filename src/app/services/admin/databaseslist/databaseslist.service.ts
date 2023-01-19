import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Databaselist} from "../../../interfaces/admin/databaselist";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DatabaseslistService {
  /**
   *
   * 2018-07-31T11:56:48Z - ISO string can be parsed using new Date("2018-07-31T11:56:48Z") and obtained from a Date object using dateObject.toISOString()
   1533038208000 - milliseconds since midnight January 1, 1970, UTC - can be parsed using new Date(1533038208000) and obtained from a Date object using dateObject.getTime()
   * @param http
   */
  constructor(private http: HttpClient) {

  }

  databaseList: Databaselist [] = [];

  // @ts-ignore
  public getDatabases(): Observable<Databaselist[]> {
    console.log("rec etDatabases()")
    //databaseListLocal: Databaselist [] = [];
    console.log("getDatabases():this.databaseList.length ", this.databaseList.length)
    if (this.databaseList.length > 0) {
      console.log(" tDatabases() this.databaseList.length ", this.databaseList.length)
      return of(this.databaseList);
    } else {
      return this.http.get<Databaselist []/*any*/>(`${environment.apiUrl}/dblist/full`).pipe(map(res => {
        this.databaseList = res.map(databaseItem => {
          databaseItem.lastStatDate = new Date(databaseItem.lastStat);
          return databaseItem;
        });

        return this.databaseList;
      }))
  /*

  subscribe(res=>{
    console.log("rec full",res)
   this.databaseList=res ;

    this.databaseList.forEach( databaseItem=>{
      databaseItem.lastStatDate = new Date(databaseItem.lastStat)
      console.log("convert from ",databaseItem.lastStat, " to ",databaseItem.lastStatDate )
    })
    //this.databaseList=res;
    console.log("this.databaseList ",this.databaseList.length)
    return this.databaseList;
  })
*/
}
   // return this.http.get<any>(`${environment.apiUrl}/dblist/full`);
  }
}
