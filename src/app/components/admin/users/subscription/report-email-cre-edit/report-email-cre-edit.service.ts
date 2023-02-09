import { Injectable } from '@angular/core';
import {Iemailreportsubscription} from "./iemailreportsubscription";
import {Iuseremailsubscription} from "../report-users-suscrioption/iuseremailsubscription";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {environment} from "../../../../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
/**
 * @deprecated
 */
export class ReportEmailCreEditService {
 emailRepostSubscription: Iemailreportsubscription []=[]

  constructor(private http: HttpClient) { }

  public clearCache(){
    this.emailRepostSubscription    = [];

  }

  public createSuscription(body:string){
    this.emailRepostSubscription    = [];
    return this.http.post(`${environment.apiUrl}/dbmsusers/updateUser`,  body);
  }

}
