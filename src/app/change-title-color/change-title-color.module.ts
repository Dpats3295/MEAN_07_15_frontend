import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeTitleColorRoutingModule } from './change-title-color-routing.module';
import { ChangeTitleColorComponent } from './change-title-color.component';
import { SectionComponent } from './section/section.component';


@NgModule({
  declarations: [
    ChangeTitleColorComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    ChangeTitleColorRoutingModule
  ]
})
export class ChangeTitleColorModule { }
