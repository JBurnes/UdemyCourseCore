import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { MatSliderModule } from '@angular/material/slider';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {NgxGalleryModule} from '@kolkov/ngx-gallery';

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
   MatInputModule,
   TabsModule.forRoot(),
   NgxGalleryModule
  
  ],
  exports:[
    BsDropdownModule,
    ToastrModule,
   
  ]
})
export class SharedModule { }
