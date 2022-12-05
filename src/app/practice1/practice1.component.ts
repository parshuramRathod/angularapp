import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {
  // @Output() foodEvent : EventEmitter<string> = new EventEmitter<string>();
  playerName: string;
  addPlayer: any[] = [];
  playerList(value1) {
    this.addPlayer.push({ playerName: value1 })
  }
  remove(playerName) {
    this.addPlayer.splice(playerName, 1)
  }

  constructor() { }

  ngOnInit() {
  }
  // addFood(value){
  //   this.foodEvent.emit(value);
  // }



}
