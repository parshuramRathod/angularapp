import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-data-binding',
  templateUrl: './assignment-data-binding.component.html',
  styleUrls: ['./assignment-data-binding.component.css']
})
export class AssignmentDataBindingComponent implements OnInit {
userName: string = 'Angular Developer';
password:any ='password'

clear(){
 this.userName = ''
 this.password = ''
}
  constructor() { }

  ngOnInit() {
  }

}
