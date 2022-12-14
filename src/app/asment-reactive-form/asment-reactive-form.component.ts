import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-asment-reactive-form',
  templateUrl: './asment-reactive-form.component.html',
  styleUrls: ['./asment-reactive-form.component.css']
})
export class AsmentReactiveFormComponent implements OnInit {
  myReactiveForm:FormGroup;
namesNotAllowed=['Codemind','Technology'];
genderss= [
  {
    id: '1',
    value: 'Male'
  },
  {
    id: '2',
    value: 'Female'
  }
]


  constructor() {this.formCreat(); }
  formCreat(){
    this.myReactiveForm= new FormGroup({
      'username':new FormControl('',[Validators.required,this.notAvailableName.bind(this)]),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'gender':new FormControl('Male'),
      'course': new FormControl('Angular'),

    })
  }


  ngOnInit() {
  }
  OnSubmit(){
console.log(this.myReactiveForm);

  }
notAvailableName(control:FormControl){
  if(this.namesNotAllowed.indexOf(control.value)!==-1){
    return{'nameNotAvailable':true}
  }
  return null;

}


}
