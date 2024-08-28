import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InclassComponent } from './inclass.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DirectoryComponent } from './directory/directory.component';

const routes: Routes = [
  {path:'directory', component: DirectoryComponent},
  {path:'contact', component: ContactComponent},
  {path:'about', component: AboutComponent},
  {path: '', component: InclassComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InclassRoutingModule { }
