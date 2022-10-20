import { Injectable } from '@angular/core';
import { Observable , Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private subject = new Subject<any>();


  sendClick(message:any){
    this.subject.next(message);
  }

  getTheValue():Observable<any>{
    return this.subject.asObservable();

  }

  constructor() { }
}
