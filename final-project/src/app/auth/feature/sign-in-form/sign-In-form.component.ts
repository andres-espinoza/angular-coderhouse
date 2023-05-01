import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { AppUser } from 'src/types/appUser';

@Component({
  selector: 'app-login-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {
  userNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  controls = [this.userNameControl, this.passwordControl];

  signInForm = new FormGroup({
    userName: this.userNameControl,
    password: this.passwordControl,
  });

  user$: Observable<AppUser | null> = this.authService.appUserObservable();

  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  handleSignIn() {
    if (this.signInForm.valid) {
      const { success, error } = this.authService.signIn({
        userName: this.userNameControl.value as string,
        password: this.passwordControl.value as string,
      });
      if (success) this.router.navigate(['']);
      else {
        if (error === 'USER_NOT_FOUND') {
          console.log('Usuario no encontrado');
          this.controls.forEach((c) => {
            c.setValue('');
            c.markAsPristine();
          });
          this.openErrorSnackBar('Usuario no encontrado');
        } else if (error === 'USER_WRONG_PASSWORD') {
          console.log('Error en la contraseña');
          this.openErrorSnackBar('La contraseña no es correcta');
          this.passwordControl.setValue('');
        }
      }
    }
  }

  handleSignUp() {
    return this.router.navigate(['registro-de-usuario']);
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
