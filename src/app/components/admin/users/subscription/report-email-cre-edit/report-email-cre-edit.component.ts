import { Component, OnInit } from '@angular/core';
import {Emailreportsubscription, Iemailreportsubscription} from "./iemailreportsubscription";
import {ActivatedRoute} from "@angular/router";
import {UsersvcService} from "../../../../../services/admin/users/usersvc.service";
import {Location} from "@angular/common";
import {AlertService} from "../../../../../services/user/alert.service";
import {Observable, Subscription} from "rxjs";

import {HttpClient} from "@angular/common/http";
import {UseremailsubscriptionsvcService} from "../report-users-suscrioption/useremailsubscriptionsvc.service";
import {DbmsServer} from "../report-users-suscrioption/iuseremailsubscription";
/**
Создание - редактирование подписки на отчет по СУБД
 npm install --save @ng-select/ng-select
 */
@Component({
  selector: 'app-report-email-cre-edit',
  templateUrl: './report-email-cre-edit.component.html',
  styleUrls: ['./report-email-cre-edit.component.css']
})
export class ReportEmailCreEditComponent implements OnInit {


  selectedDbmsServer?: DbmsServer;


  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];


serverlist :DbmsServer[]=[]

  id?:number
  server_name?:string
  cluster_name?:string
  report_id?:number
  user_id ?:number
  enabled?:number
  last_send?:string
  window_interval?:number
  time_to_send_hour?:number
  time_to_send_minute?:number
  iemailreportsubscription: Iemailreportsubscription []=[]
  private subscription?: Subscription;
  private querySubscription: Subscription;
  _location?: Location
  subscriptions: Subscription []=[];

  constructor(private activateRoute: ActivatedRoute,private usrSvc:UsersvcService, private  location: Location ,private alertSvc: AlertService,private http: HttpClient,  private userSubscrSvc:UseremailsubscriptionsvcService) {

    this._location=location;
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    this.querySubscription = activateRoute.queryParams.subscribe(
      (queryParam: any) => {
       // this.login = queryParam['login'];

      }
    );


  }


 // emailsuscr:Emailreportsubscription = new Emailreportsubscription()
  ngOnInit(): void {


    this.subscriptions.push(this.userSubscrSvc.getServerList().subscribe( res =>{
      this.serverlist=res;
      this.selectedDbmsServer=this.serverlist[0];
    }, err=>{
      this.alertSvc.error(err)
      console.log(err)
    }))



    let data = {
      "ip": "192.168.1.115",
      "port": "9001",
      "process": "public_video_convert:video_convert_01"
    }
    let body = JSON.stringify(data);
    let head = new Headers({
      'Content-Type': 'application/json'
    });

   /* this.http.post(url, body, {headers : head})
      .map(res =>  res.json())
      .subscribe(
        data => {console.log(data);},
        err => console.log(err),
        () => console.log('Fetching complete for Server Metrics')
      );*/
  }

  saveSuscription() {

  }

  creSuscription() {

  }
  ngOnDestroy():void{
    this.subscriptions.forEach(susbcr =>susbcr.unsubscribe())
}


  compareWith(item:DbmsServer, selected:DbmsServer) {
    return item.id === selected.id
  }
}
