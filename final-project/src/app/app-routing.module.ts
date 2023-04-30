import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsViewComponent } from './students/feature/students-view/students-view.component';
import { LoginFormComponent } from './login/feature/login-form/login-form.component';

const routes: Routes = [
  {
    path: 'home',
    component: StudentsViewComponent,
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
