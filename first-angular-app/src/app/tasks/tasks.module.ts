import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [TasksComponent, NewTaskComponent, TaskComponent],
  exports: [TasksComponent],
  imports: [SharedModule, CommonModule, FormsModule],
})
export class TasksModule {}
