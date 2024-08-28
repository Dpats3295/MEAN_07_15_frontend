import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'inclass', loadChildren: () => import('./inclass/inclass.module')
    .then(m => m.InclassModule) }, 
  { path: 'change_title_color', loadChildren: () => import('./change-title-color/change-title-color.module')
    .then(m => m.ChangeTitleColorModule) },   
  { path: 'user_registration_form', loadChildren: () => import('./user-registration-form/user-registration-form.module')
    .then(m => m.UserRegistrationFormModule)}, 
  { path: 'data_binding', loadChildren: () => import('./data-binding/data-binding.module')
    .then(m => m.DataBindingModule)},
  { path: 'product', loadChildren: () => import('./product/product.module')
    .then(m => m.ProductModule) },
  { path: 'task', loadChildren: () => import('./task/task.module')
    .then(m => m.TaskModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
