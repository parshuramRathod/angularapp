import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {
// @Output() foodEvent : EventEmitter<string> = new EventEmitter<string>();
  

constructor() { }

  ngOnInit() {
  }
  // addFood(value){
  //   this.foodEvent.emit(value);
  // }
}
