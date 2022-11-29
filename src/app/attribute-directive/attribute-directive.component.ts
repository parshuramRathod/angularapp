import { Component, OnInit } from '@angular/core';
import { Builder } from 'protractor';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {

  colorVal  = 'blue';

  uName;

  people:any[] = [
    {
      "name": "Jack",
      "country": "UK"
    },
    {
      "name": "Sumit",
      "country": "USA"
    },
    {
      "name": "Anup",
      "country": "HK"
    },
    {
      "name": "codemind",
      "country": "UK"
    },
    {
      "name": "Surya",
      "country": "USA"
    }
  ]
//   show(value){
//     this.uName = value.target.value;
// console.log(value.target.value);


//   }

  username;

  show(value){
    this.username = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
