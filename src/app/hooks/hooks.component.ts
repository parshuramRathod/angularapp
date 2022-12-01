import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges {
  @Input() userId: number;
  pi;

  constructor() {
    this.pi = 3.14;
    console.log('HooksComponent constructor called ');

  }


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
