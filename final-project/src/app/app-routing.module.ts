import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsViewComponent } from './students/feature/students-view/students-view.component';
import { SignInFormComponent } from './login/feature/sign-in-form/sign-In-form.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SignInFormComponent,
  },
  {
    path: 'estudiantes',
    component: StudentsViewComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
