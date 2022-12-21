import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
UserName;
  constructor(private _utilityServices: UtilityService) { 
    this._utilityServices.userName.subscribe(res=>{
      this.UserName=res;
    })
  }

  ngOnInit() {
  }
  UpdateUserName(uname){
    console.log(uname.value);
    this._utilityServices.userName.next(uname.value)
    

  }

}
