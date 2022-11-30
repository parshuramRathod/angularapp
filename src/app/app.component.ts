import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  //parent component
  uname= 'I am from practice component';

  Student:any[]=[
  {
    stdName : "Parshuram",
    stdCollage : "VVPIET solapur",
    stdRollNo: 27,
    stdBranch: "Electrical and Electronics Engg."

  }
]
  foods: string[] = [];
  getDataFromChild(value) {
    console.log(value);
    this.foods.push(value);
  }

  foodss: string[]=[];
  getDataFormFood(value){
    console.log(value);
    this.foodss.push(value)
    
  }
  City:string[]=[];
  getDataOfCity(value){
    console.log(value);
    this.City.push(value);
    
  }

  

}
