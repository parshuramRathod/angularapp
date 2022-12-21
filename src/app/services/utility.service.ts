import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  // userName= new Subject<any>();

  // to set default value or initial value we use behaviour subject
  userName= new BehaviorSubject('Angular UI Developer');

  constructor() { }
}
