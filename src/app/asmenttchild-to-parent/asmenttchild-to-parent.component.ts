import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-asmenttchild-to-parent',
  templateUrl: './asmenttchild-to-parent.component.html',
  styleUrls: ['./asmenttchild-to-parent.component.css']
})
export class AsmenttchildToParentComponent implements OnInit {
 @Output() crickDetails : EventEmitter<string> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  Cricketer(value){
this.crickDetails.emit(value);

  }
}

