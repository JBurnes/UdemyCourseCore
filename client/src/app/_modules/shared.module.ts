import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { MatSliderModule } from '@angular/material/slider';

import{MatInputModule}from '@angular/material/input'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
     positionClass:'toast-bootom-right'
   }),
   MatSliderModule,
   MatInputModule
  
  ],
  exports:[
    BsDropdownModule,
    ToastrModule,
   
  ]
})
export class SharedModule { }
