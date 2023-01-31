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
import { NgxEchartsModule } from 'ngx-echarts';
import { GraphSchemasComponent } from './components/admin/databaselist/graph-schemas/graph-schemas.component';
import { UsereditComponent } from './components/admin/users/useredit/useredit.component';
import { UserlistComponent } from './components/admin/users/userlist/userlist.component';
@NgModule({
  declarations: [
    AppComponent,
    CPgSettingComponent,
    CDbmsListComponent,
    CLoginComponentComponent,
    AlertComponent,
    DatabaseListComponent,
    GraphSchemasComponent,
    UsereditComponent,
    UserlistComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts')
    }),
    BrowserModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],/**/
  bootstrap: [AppComponent]
})
export class AppModule { }
