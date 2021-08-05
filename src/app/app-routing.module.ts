import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LearningPathComponent } from './components/learning-path/learning-path.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'todos',
    component: TodoListComponent

  },
  {
    path: "counter",
    component: CounterComponent

  },
  {
    path: 'learning',
    component: LearningPathComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
