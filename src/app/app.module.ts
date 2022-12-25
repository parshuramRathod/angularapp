import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { assignmentComponent } from './01 assignment/01_assignment_component';
import { AssignmentComponent } from './assignment1/assignment1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AssignmentDataBindingComponent } from './assignment-data-binding/assignment-data-binding.component';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { AsmentStructralDerectivesComponent } from './asment-structral-derectives/asment-structral-derectives.component';
import { PracticeComponent } from './practice/practice.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { CustdirDirective } from './custdir.directive';
import { PasswordConfirmComponent } from './password-confirm/password-confirm.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { Practice1Component } from './practice1/practice1.component';
import { AsmenttchildToParentComponent } from './asmenttchild-to-parent/asmenttchild-to-parent.component';
import { HooksComponent } from './hooks/hooks.component';
import { AsmentdireciveComponent } from './asmentdirecive/asmentdirecive.component';
import { AssmentAddRemoveComponent } from './assment-add-remove/assment-add-remove.component';
import { Practice3Component } from './practice3/practice3.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { AsmentSimpleFormComponent } from './asment-simple-form/asment-simple-form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AsmentReactiveFormComponent } from './asment-reactive-form/asment-reactive-form.component';
import { AssmentRegistrationFormTDFComponent } from './assment-registration-form-tdf/assment-registration-form-tdf.component';
import { ServiceComp1Component } from './service-comp1/service-comp1.component';
import { Servicescomp2Component } from './servicescomp2/servicescomp2.component';
import {HttpClientModule} from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Assmentcomp1Component } from './assmentcomp1/assmentcomp1.component';
import { Assmentcomp2Component } from './assmentcomp2/assmentcomp2.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './count.pipe';
import { FilterPipe } from './filter.pipe';
import { FilpterpipeComponent } from './filpterpipe/filpterpipe.component';
import { AssmentPipeComponent } from './assment-pipe/assment-pipe.component';
import { GenderPipe } from './gender.pipe';
import { SearchGenderPipe } from './search-gender.pipe';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductComponent } from './product/product.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    assignmentComponent,
    AssignmentComponent,
    NgswitchComponent,
    AssignmentDataBindingComponent,
    DemodirectivesComponent,
    AsmentStructralDerectivesComponent,
    PracticeComponent,
    AttributeDirectiveComponent,
    CustdirDirective,
    PasswordConfirmComponent,
    ParentCompComponent,
    ChildCompComponent,
    Practice1Component,
    AsmenttchildToParentComponent,
    HooksComponent,
    AsmentdireciveComponent,
    AssmentAddRemoveComponent,
    Practice3Component,
    SimpleformComponent,
    AsmentSimpleFormComponent,
    ReactiveformComponent,
    AsmentReactiveFormComponent,
    AssmentRegistrationFormTDFComponent,
    ServiceComp1Component,
    Servicescomp2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Assmentcomp1Component,
    Assmentcomp2Component,
    PipedemoComponent,
    CountPipe,
    FilterPipe,
    FilpterpipeComponent,
    AssmentPipeComponent,
    GenderPipe,
    SearchGenderPipe,
    AboutusComponent,
    ProductComponent,
    ContactusComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
