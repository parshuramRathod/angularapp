import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
todaysDate= new Date();
observable;
price: number=80000;
obj = {id:'101',name:'jack'}
  constructor(private _utilitySevice: UtilityService) { 
    this.observable= this._utilitySevice.userName;
  }

  ngOnInit() {
  }

}
