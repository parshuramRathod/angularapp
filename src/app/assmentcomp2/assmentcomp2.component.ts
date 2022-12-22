import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-assmentcomp2',
  templateUrl: './assmentcomp2.component.html',
  styleUrls: ['./assmentcomp2.component.css']
})
export class Assmentcomp2Component implements OnInit {
  employee:any=[
    {empId:1,empName:"Mrs. Dennis Schulist",empCompany:'TCS',empSalary:700000},
    {empId:2,empName:"Kurtis Weissnat",empCompany:'CONGNIGENT',empSalary:350000},
    {empId:3,empName:"Rex Trail",empCompany:'Infosys',empSalary:700000},
    {empId:4,empName:"Maxime_Nienow",empCompany:'Capgemini',empSalary:100000},
    {empId:5,empName:"Glenna Reichert",empCompany:'Accenture',empSalary:1500000},
    
  ]
// employee services injected
  constructor(private _employeedata:EmployeeService) {
this._employeedata.employee.subscribe(empValue=>{
  this.employee=empValue;
})
   }

  ngOnInit() {
  }
  empDataUpdate(){
    this._employeedata.employee.next(this.employee);
  }

}
