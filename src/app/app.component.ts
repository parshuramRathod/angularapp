import { Component } from '@angular/core';
import { Product } from './models/product';

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

  //child to parent
  Cricketer:any[]=[
    {
      cicketerName: "Sachin Tendulkar",
      totalMatch:664,
      totalscore:34357,
      hundreadScore:100,
      highestScore:248,
    },
    {
      cicketerName: "Kumar Sangakkara",
      totalMatch:594,
      totalscore:28016,
      hundreadScore:63,
      highestScore:319,
    },
    {
      cicketerName: "Ricky Ponting ",
      totalMatch:560,
      totalscore:27483,
      hundreadScore:71,
      highestScore:257,
    },
    {
      cicketerName: "Mahila Jayawardene  ",
      totalMatch:652,
      totalscore:25957,
      hundreadScore:54,
      highestScore:374,
    },
    {
      cicketerName: "Jack Kallis",
      totalMatch:519,
      totalscore:25534,
      hundreadScore:62,
      highestScore:224,
    },
    
  ];
  getDataOfCricketer(value){
    console.log(value);
    this.Cricketer.push(value);
    
  }

  //lifecycle hooks
  public mobId: number;
  public uid: number;
  data:string = 'red';
  name: string;
  price: number;
  product: Product = new Product();
 

  //docheck
  handleData(value) {
    this.data = value.target.value;
  }
  updateProduct() {
    // this.product = new Product();
    this.product.name = this.name;
    this.product.price = this.price;
  }

  appchildExist: boolean = true;
  destroy() {
    this.appchildExist = false;
  }
  pName:string;
  pValue:number;
  productData: string;

  dataHandle(value){
    this.productData = value.target.value;
  }

  dataUpadate(){
    this.product= new Product();
    this.product.name =this.name;
    this.product.price= this.price;

  }

}
