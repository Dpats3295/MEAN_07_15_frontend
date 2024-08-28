import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  status: string;
  priority: string;
}

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {
  @Input() task!: Task;
  @Output() save = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter<void>();

  onSave(){
    this.save.emit(this.task);
  }

  onCancel(){
    this.cancel.emit()
  }

}
