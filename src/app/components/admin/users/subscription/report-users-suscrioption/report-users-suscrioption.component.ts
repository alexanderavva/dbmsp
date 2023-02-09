import { Component, OnInit } from '@angular/core';
import {UseremailsubscriptionsvcService} from "./useremailsubscriptionsvc.service";
import {Iuseremailsubscription} from "./iuseremailsubscription";

/**
 * Полный список всех подписок всех пользователей
 */
@Component({
  selector: 'app-report-users-suscrioption',
  templateUrl: './report-users-suscrioption.component.html',
  styleUrls: ['./report-users-suscrioption.component.css']
})
export class ReportUsersSuscrioptionComponent implements OnInit {

  constructor(private emailSubscrSVC:UseremailsubscriptionsvcService) { }
  userSubscriptions  :Iuseremailsubscription  [] = [];

  ngOnInit(): void {
    this.emailSubscrSVC.getUserEmailSSubscription().subscribe(res=>{
      this.userSubscriptions=res;
    })
  }

}
