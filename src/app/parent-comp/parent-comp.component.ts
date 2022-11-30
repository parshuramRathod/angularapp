import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {
Student:any[]=[
  {
    stdName : "Parshuram",
    stdCollage : "VVPIET solapur",
    stdRollNo: 27,
    stdBranch: "Electrical and Electronics Engg."

  }
]
  constructor() { }

  ngOnInit() {
  
  }

}
