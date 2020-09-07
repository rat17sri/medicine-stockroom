import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMedicineComponent } from './all-medicine/all-medicine.component';
import { AddlMedicineComponent } from './addl-medicine/addl-medicine.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AllMedicineComponent,
    AddlMedicineComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
         path: 'all-medicine',
         component: AllMedicineComponent
      },
      {
        path: 'add-medicine',
        component: AddlMedicineComponent
     },
     {
       path: '**',
       redirectTo: 'all-medicine'
     }
   ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
