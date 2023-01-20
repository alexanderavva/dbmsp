import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CPgSettingComponent} from "./components/pg/cpg-setting/cpg-setting.component";
import {CDbmsListComponent} from "./components/pg/cdbms-list/cdbms-list.component";
import {CLoginComponentComponent} from "./components/admin/clogin-component/clogin-component.component";
import {AuthGuard} from "./models/auth.guard";
import {DatabaseListComponent} from "./components/admin/databaselist/database-list/database-list.component";
import {GraphSchemasComponent} from "./components/admin/databaselist/graph-schemas/graph-schemas.component";
/*import {BoardAdminComponent} from "./components/auth/board-admin/board-admin.component";
import {BoardModeratorComponent} from "./components/auth/board-moderator/board-moderator.component";
import {BoardUserComponent} from "./components/auth/board-user/board-user.component";
import {ProfileComponent} from "./components/auth/profile/profile.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {HomeComponent} from "./components/auth/home/home.component";*/

const routes: Routes = [
  { path: 'login', component: CLoginComponentComponent },
  { path: 'testchart', component: GraphSchemasComponent },
  { path: 'home', component:  /*CPgSettingComponent*/DatabaseListComponent,   canActivate: [AuthGuard] },
  { path: 'databaseList', component: CDbmsListComponent,   canActivate: [AuthGuard] },
  { path: 'serverDatabaseList', component: DatabaseListComponent,   canActivate: [AuthGuard] },
  { path: 'server/:id', component: CPgSettingComponent},
  /*
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },*/
  { path: '', redirectTo: 'serverDatabaseList',pathMatch:'full' },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
