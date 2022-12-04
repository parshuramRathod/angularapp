import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assment-add-remove',
  templateUrl: './assment-add-remove.component.html',
  styleUrls: ['./assment-add-remove.component.css']
})
export class AssmentAddRemoveComponent implements OnInit {
  addName:string;
  add:any[]=[];
addPassenger(values){
this.add.push({addName:values});
}

removeData(value){
this.add.splice(value,1)
}
  constructor() { }

  ngOnInit() {
  }

}
