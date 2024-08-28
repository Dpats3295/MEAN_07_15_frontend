import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegistrationFormRoutingModule } from './user-registration-form-routing.module';
import { UserRegistrationFormComponent } from './user-registration-form.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserRegistrationFormComponent,
    UserRegistrationComponent
  ],
  imports: [
    CommonModule,
    UserRegistrationFormRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserRegistrationFormModule { }
