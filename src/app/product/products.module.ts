import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { TabletComponent } from './tablet/tablet.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { SharedModule } from '../models/shared.module';

const prodRoute : Routes = [
  { path: '', component:ProductComponent,
  children: [
     { path: 'laptop', component: LaptopComponent },
     { path: 'tablet', component: TabletComponent },
     { path: 'tv', component: TvComponent },
     { path: 'washingmachine', component: WashingmachineComponent },


   ]
 }, // localhost:4200//product
];


@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    TvComponent,
    TabletComponent,
    WashingmachineComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoute),
    SharedModule
  ],
  exports:[
    RouterModule
  ]
})
export class ProductsModule {
  constructor(){
    console.log('Product Module called');
    
  }
 }
