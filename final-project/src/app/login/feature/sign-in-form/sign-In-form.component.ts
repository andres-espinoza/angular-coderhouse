import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private authService: AuthService) {}

  handleSignIn() {
    if (this.signInForm.valid) {
      const a = this.authService.signIn({
        userName: this.userNameControl.value as string,
        password: this.passwordControl.value as string,
      });
      console.log(a);
    }
  }

  handleSignUp() {
    console.log('redirect to Sign In Pages');
  }
}
