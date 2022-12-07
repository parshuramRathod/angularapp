import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck,AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() userId: number;
  @Input() parentData: string;
  @Input() product: Product;
  @ContentChild("child", {static:false}) contentChild:ElementRef;
  @ViewChild("childHook",{static:false}) viewChild:ElementRef

  pi;
  counter;
  num:number = 1;

  constructor() {
    this.pi = 3.14;
    console.log('HooksComponent constructor called ');
    
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    clearInterval(this.counter);
    
  }

  //ngAfterViewInIt and ngViewAfterChecked 
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
    this.viewChild.nativeElement.setAttribute('style',`color:${this.parentData}`)
    
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    this.viewChild.nativeElement.setAttribute('style',`color:${this.parentData}`)
  }
  //ngAfterContentInIt and ngContentAfterChecked
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  this.contentChild.nativeElement.setAttribute('style', `color:${this.parentData}`);

    
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called',this.contentChild);
    console.log('view int access', this.viewChild);

  //  this.contentChild.nativeElement.setAttribute('style', 'color:green');
  // this.contentChild.nativeElement.setAttribute('style', `color:${this.parentData}`);   
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

//ngOnchange
  ngOnChanges(changes: SimpleChanges): void {
    // for (const propName in changes) {
    //   const prop = changes[propName]

    //   const { previousValue, currentValue, firstChange } = prop;
    //   console.log(`Prop Name ${propName}`);
    //   console.log(`Prev value ${previousValue}`);
    //   console.log(`Current Name ${currentValue}`);
    //   console.log(`First change ${firstChange}`);
    //   console.log("==================================");

    // }
  }

  ngOnInit() {
    console.log("HooksComponent ngOnInit called");
    this.counter = setInterval(() => {
      this.num = this.num + 1 ;
      console.log(this.num);// api}, 1000)
    },1000)
  }

}
