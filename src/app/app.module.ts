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
    Practice3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
