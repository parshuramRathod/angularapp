import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
// import { AssmentaboutusComponent } from './assmentaboutus/assmentaboutus.component';
// import { AssmenthomeComponent } from './assmenthome/assmenthome.component';
// import { AssmentloginComponent } from './assmentlogin/assmentlogin.component';
// import { AssmentproductComponent } from './assmentproduct/assmentproduct.component';
// import { DemopostComponent } from './demopost/demopost.component';
// import { PostdetailsComponent } from './postdetails/postdetails.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }, // to do default select we empty the path
  { path: 'aboutus', component: AboutusComponent }, // localhost:4200//aboutus

  { path: 'contactus', component: ContactusComponent },
  { path: 'product', loadChildren: './product/products.module#ProductsModule' },//lazy loading syntax
  { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' },
  { path: '**', component: PagenotfoundComponent } // wild card component always last component

  // assignment work
  //   {path:"", redirectTo:"assmentlogin",pathMatch:'full'},
  //   { path: 'assmentlogin', component: AssmentloginComponent },
  //   { path: 'assmenthome', component: AssmenthomeComponent },
  //   { path: 'assmentproduct', component: AssmentproductComponent },
  //   { path: 'assmentaboutus', component: AssmentaboutusComponent },
  //   { path: 'assmenthome', component: AssmenthomeComponent },

  //   {path:'post',component:DemopostComponent},
  //   {path:'postdetails/:id',component:PostdetailsComponent},
  //   {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
