import { Routes } from '@angular/router';
import {
  canLeaveEditPage,
  NewTaskComponent,
} from '../tasks/new-task/new-task.component';
import { TasksComponent, resolveUserTasks } from '../tasks/tasks.component';
import { TasksService } from '../tasks/tasks.service';

export const userRoutes: Routes = [
  {
    path: '',
    providers: [TasksService],
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks',
        component: TasksComponent,
        // loadComponent: () =>
        //   import('../tasks/tasks.component').then((comp) => comp.TasksComponent),
        runGuardsAndResolvers: 'always',
        resolve: {
          userTasks: resolveUserTasks,
        },
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent,
        canDeactivate: [canLeaveEditPage],
      },
    ],
  },
];
