import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assment-pipe',
  templateUrl: './assment-pipe.component.html',
  styleUrls: ['./assment-pipe.component.css']
})
export class AssmentPipeComponent implements OnInit {
  genderSearch:string='';
  employee: any[]=[
    {id:1,name:'Rahul',gender:'Male',DOB:'01-03-1990'},
    {id:2,name:'Priya',gender:'Female',DOB:'07-05-1987'},
    {id:3,name:'John',gender:'Male',DOB:'01-03-1990'},
    {id:4,name:'Jaya',gender:'Female',DOB:'06-08-1992'},
    {id:5,name:'Pramod',gender:'Male',DOB:'01-03-1985'},
    {id:6,name:'Ashwini',gender:'Female',DOB:'01-03-1988'},

  ]

  constructor() { }

  ngOnInit() {
  }

}
