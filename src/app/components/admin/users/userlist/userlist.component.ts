import { Component, OnInit } from '@angular/core';
import {IDbmsUser} from "../../../../interfaces/admin/users/idbms-user";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UsersvcService} from "../../../../services/admin/users/usersvc.service";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users:IDbmsUser[]=[];
  constructor(private http: HttpClient,private usrSvc:UsersvcService ) { }


  ngOnInit(): void {
    this.usrSvc.getUsers().subscribe(res=>this.users=res)


    /*
      let   userNew: IDbmsUser  = {} as IDbmsUser;
    this.http.get<IDbmsUser[]>(environment.apiUrl+"/dbmsusers/getUser/"+this.id).subscribe(data=>{
      console.log("userNew",data)
      this.user=data
    })
  }*/
  }

  tableSort(paramSorting: string) {

  }
}
