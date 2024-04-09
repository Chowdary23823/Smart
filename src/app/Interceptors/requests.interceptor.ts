import { Observable, catchError, finalize, retry, throwError } from "rxjs";
import { Injectable } from "@angular/core";

import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse} from "@angular/common/http";
import { CredentialsService } from "../Services/credentials.service";


@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private service:CredentialsService){}
  public intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {

    
    
      request = request.clone({
        setHeaders: {
          Authorization: this.service.userEmail,
          customheader: ''+ this.service.userEmail+' the user email'

        }
      });

    return new Observable(observer => {
      next.handle(request).pipe(
        
        retry(2),

        catchError((error: HttpErrorResponse) => {
          alert(`HTTP Error: ${request.url}`);
          return throwError(error);
        }),

        
        finalize(() => {
          const monMessage = `${request.method} "${request.urlWithParams}"`;
          console.log(monMessage);
        })
      )
      .subscribe(event => {
        if(event instanceof HttpResponse) {
          observer.next(event);
        }        
      });
    });
  }
}
