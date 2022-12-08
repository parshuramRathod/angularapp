import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-asment-simple-form',
  templateUrl: './asment-simple-form.component.html',
  styleUrls: ['./asment-simple-form.component.css']
})
export class AsmentSimpleFormComponent implements OnInit {

  onSubmit(studentForm:NgForm){
    console.log(studentForm);
  }
  constructor() { }

  ngOnInit() {
  }

}
