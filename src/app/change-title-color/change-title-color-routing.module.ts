import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeTitleColorComponent } from './change-title-color.component';

const routes: Routes = [{ path: '', component: ChangeTitleColorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeTitleColorRoutingModule { }
