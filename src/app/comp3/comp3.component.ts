import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  UserName;
  constructor(private _utilityService:UtilityService) {
    this._utilityService.userName.subscribe(res =>{
      this.UserName=res;
    })
   }

  ngOnInit() {
  }
  updateUserName(uname){
    console.log(uname.value);
    //next method is used to send message to an observable i.e username
    this._utilityService.userName.next(uname.value);
    
  }

}
