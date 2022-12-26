import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assmentlogin',
  templateUrl: './assmentlogin.component.html',
  styleUrls: ['./assmentlogin.component.css']
})
export class AssmentloginComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
  }
  checkUser(usrName,password){
    if(usrName=='User'&&password=='user')
this._route.navigate(['assmentproduct'])
else{
  return alert('please enter valid password and password is user')
}
  }
 

}
