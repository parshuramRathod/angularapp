import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AboutusComponent } from './aboutus/aboutus.component';
import { AssmentaboutusComponent } from './assmentaboutus/assmentaboutus.component';
import { AssmenthomeComponent } from './assmenthome/assmenthome.component';
import { AssmentloginComponent } from './assmentlogin/assmentlogin.component';
import { AssmentproductComponent } from './assmentproduct/assmentproduct.component';
import { DemopostComponent } from './demopost/demopost.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
// import { ContactusComponent } from './contactus/contactus.component';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { LaptopComponent } from './product/laptop/laptop.component';
// import { ProductComponent } from './product/product.component';
// import { TabletComponent } from './product/tablet/tablet.component';
// import { TvComponent } from './product/tv/tv.component';
// import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';


const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  // { path: 'home', component: HomeComponent }, // to do default select we empty the path
  // { path: 'aboutus', component: AboutusComponent }, // localhost:4200//aboutus
  // { path: 'product', component:ProductComponent,
  //  children: [
  //     // { path: '', component: ProductComponent },
  //     { path: 'laptop', component: LaptopComponent },
  //     { path: 'tablet', component: TabletComponent },
  //     { path: 'tv', component: TvComponent },
  //     { path: 'washingmachine', component: WashingmachineComponent },


  //   ]
  // }, // localhost:4200//product
  // { path: 'contactus', component: ContactusComponent },
  // { path: '**', component: PagenotfoundComponent } // wild card component always last component

  //assignment work
  {path:"", redirectTo:"assmentlogin",pathMatch:'full'},
  { path: 'assmentlogin', component: AssmentloginComponent },
  { path: 'assmenthome', component: AssmenthomeComponent },
  { path: 'assmentproduct', component: AssmentproductComponent },
  { path: 'assmentaboutus', component: AssmentaboutusComponent },
  { path: 'assmenthome', component: AssmenthomeComponent },

  {path:'post',component:DemopostComponent},
  {path:'postdetails/:id',component:PostdetailsComponent}
  // {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
