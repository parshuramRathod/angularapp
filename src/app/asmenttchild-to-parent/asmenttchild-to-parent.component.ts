import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-asmenttchild-to-parent',
  templateUrl: './asmenttchild-to-parent.component.html',
  styleUrls: ['./asmenttchild-to-parent.component.css']
})
export class AsmenttchildToParentComponent implements OnInit {
 @Output() cityName : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  City(value){
this.cityName.emit(value);

  }
}

