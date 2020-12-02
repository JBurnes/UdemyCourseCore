import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { MatSliderModule } from '@angular/material/slider';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {NgxGalleryModule} from '@kolkov/ngx-gallery';

import{MatInputModule}from '@angular/material/input'
import { FileUploadModule } from 'ng2-file-upload';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

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
   NgxGalleryModule,
   FileUploadModule,
   BsDatepickerModule.forRoot()
  
  ],
  exports:[
    BsDropdownModule,
    ToastrModule,
    NgxGalleryModule,
    FileUploadModule,
   BsDatepickerModule

  ]
})
export class SharedModule { }
