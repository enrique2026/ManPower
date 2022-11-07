import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApi:string  | any;

  constructor(private _http:HttpClient) {
    this.urlApi=environment.apiUrlVolcan;
   }

   get<Type>(url: string): Observable<Type> {
    const call: Observable<any> = this._http.get(`${this.urlApi}/${url}`, { observe: 'response' });
    const data$ = new Observable<Type>(obs => {
      call.subscribe(
        (res: any) => {
          obs.next(res);
          obs.complete();
        },
        (err: any) => {
          obs.error(err);
        }
      )
    }).pipe(map((value:any) => {
      return value.body;
    }));
    return data$;
  }
  post<Type>(url: string, body: any,header?:any): Observable<Type> {
    if(header!=undefined){
      const call: Observable<any> = this._http.post(`${this.urlApi}/${url}`, body, { observe: 'response'});
      const data$ = new Observable<Type>(obs => {
        call.subscribe(
          (res: any) => {

            obs.next(res);
            obs.complete();
          },
          (err: any) => {

            obs.error(err);
          }
        )
      }).pipe(map((value:any) => {
        return value.body;
      }));
      return data$;
    }else{
      const call: Observable<any> = this._http.post(`${this.urlApi}/${url}`, body, { observe: 'response',headers:header });
      const data$ = new Observable<Type>(obs => {
        call.subscribe(
          (res: any) => {

            obs.next(res);
            obs.complete();
          },
          (err: any) => {

            obs.error(err);
          }
        )
      }).pipe(map((value:any) => {
        return value.body;
      }));
      return data$;
    }


  }
  put<Type>(url: string, body: any): Observable<Type> {
    const call: Observable<any> = this._http.put(`${this.urlApi}/${url}`, body, { observe: 'response' });
    const data$ = new Observable<Type>(obs => {
      call.subscribe(
        (res: any) => {
          obs.next(res);
          obs.complete();
        },
        (err: any) => {
          obs.error(err);
        }
      )
    }).pipe(map((value:any) => {
      return value.body;
    }));
    return data$;
  }
  delete<Type>(url: string): Observable<Type> {
    const call: Observable<any> = this._http.delete(`${this.urlApi}/${url}`, { observe: 'response' });
    const data$ = new Observable<Type>(obs => {
      call.subscribe(
        (res: any) => {
          obs.next(res);
          obs.complete();
        },
        (err: any) => {
          obs.error(err);
        }
      )
    }).pipe(map((value:any) => {
      return value.body;
    }));
    return data$;
  }
}


