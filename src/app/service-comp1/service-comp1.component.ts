import { Component, OnInit } from '@angular/core';
import { DemoservicesService } from '../services/demoservices.service';

@Component({
  selector: 'app-service-comp1',
  templateUrl: './service-comp1.component.html',
  styleUrls: ['./service-comp1.component.css']
})
export class ServiceComp1Component implements OnInit {

  products ={};
  constructor(private _demoservices:DemoservicesService) { }

  ngOnInit() {
    this.products = this._demoservices.products;
  }
  OnSubscribe(){
    this._demoservices.display();
  }

}
