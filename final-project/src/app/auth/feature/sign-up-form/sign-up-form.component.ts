import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserType } from 'src/types/userType';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  userNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  userTypeControl = new FormControl('', [Validators.required]);
  controls = [this.userNameControl, this.passwordControl, this.userTypeControl];

  signUpForm = new FormGroup({
    userName: this.userNameControl,
    password: this.passwordControl,
    userType: this.userTypeControl,
  });

  userTypeOptions: [string, UserType][] = [
    ['Estudiante', UserType.User],
    ['Administrador', UserType.Admin],
  ];
  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  handleSignUp() {
    if (this.signUpForm.valid) {
      const { success, error } = this.authService.signUp({
        userName: this.userNameControl.value as string,
        password: this.passwordControl.value as string,
        userType: this.signUpForm.value.userType as unknown as UserType,
      });
      if (success) this.router.navigate(['']);
      else {
        this.controls.forEach((c) => c.setValue(''));
        if (error === 'USERNAME_ALREADY_EXIST') {
          this.openErrorSnackBar('El usuario ya existe');
        } else if (error === 'UNEXPECTED') {
          this.openErrorSnackBar('Ocurrio un error inesperado');
        }
      }
    }
  }

  openErrorSnackBar(message: string) {
    this._snackBar.open(message, undefined, {
      duration: 2500,
      panelClass: ['error-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }
}
