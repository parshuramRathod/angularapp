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

}
