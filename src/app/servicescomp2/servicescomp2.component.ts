import { Component, OnInit } from '@angular/core';
import { DemoservicesService } from '../services/demoservices.service';

@Component({
  selector: 'app-servicescomp2',
  templateUrl: './servicescomp2.component.html',
  styleUrls: ['./servicescomp2.component.css']
})
export class Servicescomp2Component implements OnInit {

  products={};
  constructor(private _demoservices:DemoservicesService) { }

  ngOnInit() {
    this.products = this._demoservices.products;
  }
OnSubscribe(){
  this._demoservices.display();

}
}
