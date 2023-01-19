import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../../../app/models/user';
import {Loginform} from "./loginform";

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
  private body?: String;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
      //JSON.parse(localStorage.getItem(userKey) ? (localStorage.getItem(userKey) as string)  : '')
    if (  localStorage.getItem('user')==null) {

      // @ts-ignore
      this.userSubject = new BehaviorSubject<User> (null);
    }
      else {
        try {
          this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') ? (localStorage.getItem('user') as string) : ''));
        }
        catch (error) {
          console.log(' — Error is new BehaviorSubject: ', error.name);
          // @ts-ignore
          this.userSubject = new BehaviorSubject<User> (null);
        }
    }
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(Susername:string, Spassword:string) {

      const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        //11111111111114   headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })

      };
      let LoginformObject = new Loginform( Susername ,  Spassword );
      console.log (LoginformObject)
      console.log("login username=",Susername," password=",Spassword)
      this.body  ="{ 'username':'"+Susername+"', 'password':'"+ Spassword + "'}";
      console.log("body=", this.body);
        return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, LoginformObject /*{
          "username": "Susername",
          "password": "Spassword"
          }*/,httpOptions)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                console.log("setItem ser=",user)
                return user;
            }));
    }

    logout() {
      // remove user from local storage and set current user to null
      localStorage.removeItem('user');
      // @ts-ignore
      this.userSubject.next(null);
      this.router.navigate(['/login']);
    }
  /*
      register(user: User) {
          return this.http.post(`${environment.apiUrl}/users/register`, user);
      }

      getAll() {
          return this.http.get<User[]>(`${environment.apiUrl}/users`);
      }

      getById(id: string) {
          return this.http.get<User>(`${environment.apiUrl}/urs/${id}`);
      }
  /*
      update(id, params) {
          return this.http.put(`${environment.apiUrl}/users/${id}`, params)
              .pipe(map(x => {
                  // update stored user if the logged in user updated their own record
                  if (id == this.userValue.id) {
                      // update local storage
                      const user = { ...this.userValue, ...params };
                      localStorage.setItem('user', JSON.stringify(user));

                      // publish updated user to subscribers
                      this.userSubject.next(user);
                  }
                  return x;
              }));
      }

      delete(id: string) {
          return this.http.delete(`${environment.apiUrl}/users/${id}`)
              .pipe(map(x => {
                  // auto logout if the logged in user deleted their own record
                  if (id == this.userValue.id) {
                      this.logout();
                  }
                  return x;
              }));
      }*/
}
