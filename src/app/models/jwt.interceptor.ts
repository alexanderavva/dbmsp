import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AccountService } from '../../app/services/user/account.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const user = this.accountService.userValue;
        const isLoggedIn = user && user.token;
        if (!isLoggedIn) {
          console.log ("interseptor NOT !isLoggedIn ",  user )
        }
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isApiUrl) {
          console.log ("interseptor add ", " Authorization: `Bearer ${user.token}`",  user.token )
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`,
                  hrenota: `figota`
                }
            });
        }
else {
          console.log ("interseptor NOT add ",  user )
        }
        return next.handle(request);
    }
}
