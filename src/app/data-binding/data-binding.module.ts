import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { DataBindingComponent } from './data-binding.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



@NgModule({
  declarations: [
    DataBindingComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    DataBindingRoutingModule,
    FormsModule
  ]
})
export class DataBindingModule { }