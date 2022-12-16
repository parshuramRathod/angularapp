import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/userDetails';

@Component({
  selector: 'app-assment-registration-form-tdf',
  templateUrl: './assment-registration-form-tdf.component.html',
  styleUrls: ['./assment-registration-form-tdf.component.css']
})
export class AssmentRegistrationFormTDFComponent implements OnInit {
 
  submitted:boolean= false;
  defaultValue:string='Mumbai';
  defaultGender:string= "Male";
  user=new User();

  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'}
  ]

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    this.submitted=true;
    console.log(form.value);

  }
  

}
