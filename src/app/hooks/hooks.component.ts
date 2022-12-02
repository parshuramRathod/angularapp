import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck {
  @Input() userId: number;
  @Input() parentData: string;
  @Input() product: Product;
  pi;

  constructor() {
    this.pi = 3.14;
    console.log('HooksComponent constructor called ');

  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

//ngOnchange
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const prop = changes[propName]

      const { previousValue, currentValue, firstChange } = prop;
      console.log(`Prop Name ${propName}`);
      console.log(`Prev value ${previousValue}`);
      console.log(`Current Name ${currentValue}`);
      console.log(`First change ${firstChange}`);
      console.log("==================================");
      


    }
  }

  ngOnInit() {
    console.log("HooksComponent ngOnInit called");

  }

}
