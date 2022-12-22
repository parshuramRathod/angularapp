import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-assmentcomp1',
  templateUrl: './assmentcomp1.component.html',
  styleUrls: ['./assmentcomp1.component.css']
})
export class Assmentcomp1Component implements OnInit {
  employee: any = [
    { empId: 1, empName: "Leanne Graham", empCompany: 'TCS', empSalary: 600000 },
    { empId: 2, empName: "Ervin Howell", empCompany: 'CONGNIGENT', empSalary: 1300000 },
    { empId: 3, empName: "Clementine Bauch", empCompany: 'Infosys', empSalary: 800000 },
    { empId: 4, empName: "Patricia Lebsack", empCompany: 'Capgemini', empSalary: 1200000 },
    { empId: 5, empName: "Chelsey Dietrich", empCompany: 'Accenture', empSalary: 1000000 },

  ]
  // employee services injected
  constructor(private _employeedata: EmployeeService) {
    this._employeedata.employee.subscribe(empValue => {
      this.employee = empValue;
    })
  }

  ngOnInit() {
  }
  empDataUpdate() {
    this._employeedata.employee.next(this.employee);
  }

}
