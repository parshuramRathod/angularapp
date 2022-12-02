import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asmentdirecive',
  templateUrl: './asmentdirecive.component.html',
  styleUrls: ['./asmentdirecive.component.css']
})
export class AsmentdireciveComponent implements OnInit {

  showDeatails=false;
  count=[];

  toggeleToDisplay(){
    this.showDeatails = !this.showDeatails;
    this.count.push(this.count.length+1)

  }


  constructor() { }

  ngOnInit() {
  }

}
