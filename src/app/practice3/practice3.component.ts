import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.css']
})
export class Practice3Component implements OnInit, OnChanges, DoCheck {
  @Input() mobileId: number;
  @Input() parentProductdata:string;
  @Input() product: Product;
  data: string;
  name: string;
  price: number;
  poroduct: Product = new Product();

  constructor() {
    console.log('constructo called');
    
   }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called ');
    
    // for (const propName in changes) {
    //   const propertiess = changes[propName];
    //   const { previousValue, currentValue, firstChange } = propertiess;
    //   console.log(`property Name ${propName}`);
    //   console.log(`Previous Value ${previousValue}`);
    //   console.log(`Current Value ${currentValue}`);
    //   console.log(`First Change ${firstChange}`);

    // }
  }

  

  ngOnInit() {
    console.log('ngOnInIt called');
    
  }

}
