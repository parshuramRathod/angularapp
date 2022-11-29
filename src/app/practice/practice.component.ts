import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  // this is  child component
  @Input() myInputMsg: string;

  constructor() { }

  ngOnInit() {
    console.log('form parent ',this.myInputMsg );
    
  }

}
