import { Component, OnInit } from '@angular/core';
import {DbmsUser, IDbmsUser} from "../../../../interfaces/admin/users/idbms-user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {iif, Subscription} from "rxjs";
import {UsersvcService} from "../../../../services/admin/users/usersvc.service";
import {filter, map} from "rxjs/operators";
import {Location} from '@angular/common';
import {AlertService} from "../../../../services/user/alert.service";
@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

  _location?: Location
  login?: string;
  email?: string;
  user?:IDbmsUser
  id?:number ;
  userName?: string;
  fromRouteLogin: string | undefined;
  private subscription?: Subscription;
  private querySubscription: Subscription;
  isActive?: boolean;
  constructor(private http: HttpClient, private activateRoute: ActivatedRoute,private usrSvc:UsersvcService, private  location: Location ,private alertSvc: AlertService) {
    this._location=location;
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    this.querySubscription = activateRoute.queryParams.subscribe(
      (queryParam: any) => {
        this.login = queryParam['login'];

      }
    );
  }

  ngOnInit(): void {
    console.log("id ", this.id)
    if (this.id){
    // this.user=
       this.usrSvc.getUsers().pipe(map (res=>{
         //в res массив IDbmsUser
         console.log("в res массив IDbmsUser this.usrSvc.getUsers().pipe(map res= ",res)

         var debg= res.filter(userInArray=>{
           console.log(" filter ", userInArray.id, " "+(userInArray.id==this.id) )
           /*это затычка, но работает*/
         /*  if (userInArray.id==this.id) {
             this.user=userInArray;this.id=userInArray.id;this.login = userInArray.login; this.email=  userInArray.userEmail;
           }*/
           /*Конец затычки*/
            return userInArray.id==this.id
         })
         return debg;
         /*.map(debg=>{
           console.log("after filter ",debg)
         })*/
         //return res;
       }  ))
       .subscribe( r=>{
         this.user=r[0];
         this.login=this.user.login;
         this.userName=this.user.userName;
         this.email=this.user.userEmail  ;
         this.id=this.user.id
         this.isActive=this.user.isActive==1
         console.log("subscribe this.usrSvc.getUsers().pipe = ",r)



       })


      //filter(res=>res.id==this.id))subscribe(res=>this.users=res)
     //
    }
    else {
      console.log("id NOT exists")
    }
    /*
let   userNew: IDbmsUser  = {} as IDbmsUser;
      this.http.get<IDbmsUser>(environment.apiUrl+"/dbmsusers/getUser/"+this.id).subscribe(data=>{
       console.log("userNew",data)
       this.user=data
      })*/
  }

  saveUser() {
console.log(" save ", this.isActive)

    // @ts-ignore
    console.log("l1=",this.login, " l2 = ",this.user.login)
    // @ts-ignore
     this.user.login=this.login ;
    // @ts-ignore
    this.user.userName=this.userName;
    // @ts-ignore
    this.user.userEmail = this.email  ;
   // this.id=this.user.id
     if(this.isActive) { // @ts-ignore
       this.user.isActive=1
     }
    else { // @ts-ignore
       this.user.isActive=0
     }

    this.usrSvc.saveUser(this.user).subscribe(res=>{
      console.log(res)
      // @ts-ignore
      this._location.back();
      console.log(res)
    })
  }


  /**
   if (this.id){
    // this.user=
       this.usrSvc.getUsers().pipe(map (res=>{
         //в res массив IDbmsUser
         console.log("в res массив IDbmsUser this.usrSvc.getUsers().pipe(map res= ",res)
         res.filter(userInArray=>userInArray.id==this.id) map(userInArray=>{
           //По каждому пользователю из массива
           console.log("user before filter ",userInArray.id )

           filter(value => value.id==this.id)
         })
       })).subscribe( r=>{
         console.log("subscribe this.usrSvc.getUsers().pipe = ",r)
       })
   */
  creUser() {
    let isActiveCbx=0;
    if(this.isActive) {isActiveCbx=1}

   let  usr1: DbmsUser;
    usr1 = new DbmsUser(0,this.login?this.login:"",this.email?this.email:"",this.userName?this.userName:"", isActiveCbx )  ;
    this.usrSvc.createUser(usr1).subscribe((res=>{
      console.log(res)
      //res.
      this.alertSvc.success("Пользователь создан")
      // @ts-ignore
      this._location.back();
      console.log(res)
    }),error => {
      this.alertSvc.error("Пользователь не создан",error.message)
    })
    /* = {
       // @ts-ignore
       id=0,
       // @ts-ignore
         userName=this.userName,
       // @ts-ignore
         userEmail = this.email,
       isActive=isActiveCbx
     }
     */

    // @ts-ignore
   //  const  usr  : IDbmsUser ;
    // @ts-ignore
     //  usr.id = 0;
      /*   // @ts-ignore
       usr.userName = this.userName;
       // @ts-ignore
       usr.userEmail = this.email;
       // @ts-ignore
        usr.isActive=isActibx;
       // @ts-ignore
   /* */
  }
}
