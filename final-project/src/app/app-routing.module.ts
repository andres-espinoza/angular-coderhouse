import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsViewComponent } from './students/feature/students-view/students-view.component';
import { SignInFormComponent } from './auth/feature/sign-in-form/sign-In-form.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignUpFormComponent } from './auth/feature/sign-up-form/sign-up-form.component';
import { UserType } from 'src/types/userType';
import { CoursesViewComponent } from './courses/ui/courses-view/courses-view.component';
import { EnrollmentViewComponent } from './enrollment/ui/enrollment-view/enrollment-view.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsViewComponent,
    canActivate: [AuthGuard],
    data: { roles: [UserType.User, UserType.Admin] },
  },
  {
    path: 'inicio-de-sesion',
    component: SignInFormComponent,
  },
  {
    path: 'registro-de-usuario',
    component: SignUpFormComponent,
  },
  {
    path: 'estudiantes',
    component: StudentsViewComponent,
    canActivate: [AuthGuard],
    data: { roles: [UserType.User, UserType.Admin] },
  },
  {
    path: 'cursos',
    component: CoursesViewComponent,
    canActivate: [AuthGuard],
    data: { roles: [UserType.User] },
  },
  {
    path: 'inscripciones',
    component: EnrollmentViewComponent,
    canActivate: [AuthGuard],
    data: { roles: [UserType.User] },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
