import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'node_modules/rxjs/internal/Subject';
import { BehaviorSubject } from 'node_modules/rxjs/internal/BehaviorSubject';



// import { Subject }    from 'rxjs/Subject';
// import { UsersAll } from '../Models/user';
// import { UsersAll } from '../Models/user';

@Injectable({
providedIn: 'root'
})



export class SharedService {
  private _stream$ = new BehaviorSubject("");
  public stream$ = this._stream$.asObservable();

  send(msg : string) {
    this._stream$.next(msg);
  }
}