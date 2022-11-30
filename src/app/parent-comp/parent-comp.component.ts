import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {
@Input() Student:any;
  constructor() { }

  ngOnInit() {
  console.log(this.Student);
  
  }

}
