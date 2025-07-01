import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private readonly formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  private readonly taskService: TasksService;

  constructor(tService: TasksService) {
    this.taskService = tService;
  }

  onAddTask(title: string, description: string) {
    this.taskService.addTask({ title, description });
    this.formEl()?.nativeElement.reset();
  }
}
