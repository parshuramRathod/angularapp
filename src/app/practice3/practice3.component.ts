import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.css']
})
export class Practice3Component implements OnInit, OnChanges {
  @Input() mobileId: number;
  data: string;
  name: string;
  price: number;
  poroduct: Product = new Product();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const propertiess = changes[propName];
      const { previousValue, currentValue, firstChange } = propertiess;
      console.log(`property Name ${propName}`);
      console.log(`Previous Value ${previousValue}`);
      console.log(`Current Value ${currentValue}`);
      console.log(`First Change ${firstChange}`);

    }
  }

  ngOnInit() {
  }

}
