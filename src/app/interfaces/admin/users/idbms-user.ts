export interface/* */ IDbmsUser {
  id: number;
  login: string;
  userEmail: string
  userName: string;
  isActive: number

}
export class DbmsUser  implements IDbmsUser {
    constructor(id:number,  login: string ,  userEmail: string ,  userName: string ,isActive: number  ) {
      this.id = id;
      this.login = login;
      this.userEmail = userEmail;
      this.userName = userName;
      this.isActive = isActive;

    }

    id: number  ;
    login: string;
    userEmail: string;
    userName: string;
    isActive: number;


}
