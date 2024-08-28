import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InclassRoutingModule } from './inclass-routing.module';
import { InclassComponent } from './inclass.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DirectoryComponent } from './directory/directory.component';


@NgModule({
  declarations: [
    InclassComponent,
    AboutComponent,
    ContactComponent,
    DirectoryComponent
  ],
  imports: [
    CommonModule,
    InclassRoutingModule
  ]
})
export class InclassModule { }
