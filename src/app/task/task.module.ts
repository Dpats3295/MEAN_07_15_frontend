import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskStatusFilterPipe } from './pipes/task-status-filter.pipe';
import { HoverEffectDirective } from './directives/hover-effect.directive';
import { OverdueHighlightDirective } from './directives/overdue-highlight.directive';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskStatusFilterPipe,
    HoverEffectDirective,
    OverdueHighlightDirective
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule
  ]
})
export class TaskModule { }
