import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { CPgSettingComponent } from './components/pg/cpg-setting/cpg-setting.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { CDbmsListComponent } from './components/pg/cdbms-list/cdbms-list.component';
import { CLoginComponentComponent } from './components/admin/clogin-component/clogin-component.component';
import {JwtInterceptor} from "./models/jwt.interceptor";
import {ErrorInterceptor} from "./services/user/error.interceptor";
import {AlertComponent} from "./services/user/alertcomponent/alert.component";
import {DatabaseListComponent } from './components/admin/databaselist/database-list/database-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CPgSettingComponent,
    CDbmsListComponent,
    CLoginComponentComponent,
    AlertComponent,
    DatabaseListComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],/**/
  bootstrap: [AppComponent]
})
export class AppModule { }
