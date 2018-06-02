import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

//import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  private helloUri = 'api/hello/';

  constructor(private http: HttpClient) { console.log('init HelloService'); }
  
  getHello(name: string) {
    return this.http.get(this.helloUri+name, {responseType: 'text'})
      //.pipe(tap(result => {console.log('result='+result);})
      //,catchError(e => { console.log(e); return of(e); }))
      ;
  }
  
}
