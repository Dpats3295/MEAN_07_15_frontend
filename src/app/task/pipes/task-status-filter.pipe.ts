import { Pipe, PipeTransform } from '@angular/core';

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  status: string;
  priority: string;
}

@Pipe({
  name: 'taskStatusFilter'
})
export class TaskStatusFilterPipe implements PipeTransform {

  transform(tasks: Task[], status: string): Task[] {
    return tasks.filter(task => task.status === status);
  }

}
