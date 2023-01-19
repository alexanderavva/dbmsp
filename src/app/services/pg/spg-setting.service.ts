import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {IPgSetting} from "../../interfaces/pg/ipg-setting";
import {Databaselist} from "../../interfaces/admin/databaselist";

@Injectable({
  providedIn: 'root'
})
export class SPgSettingService {

  constructor(private http: HttpClient) {

  }

  public getAll() {



    return this.http.get<any>(`${environment.apiUrl}/pgsetting/full`);
  }
}
