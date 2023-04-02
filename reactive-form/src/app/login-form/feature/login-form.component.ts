import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { nameValidator } from 'src/app/shared/utils/regex/formValidators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  firstNameControl = new FormControl('', [Validators.required, Validators.pattern(nameValidator)]);
  lastNameControl = new FormControl('', [Validators.required, Validators.pattern(nameValidator)]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.min(6),
  ]);
  termsAndConditionsControl = new FormControl(false, [Validators.requiredTrue]);

  registerForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: this.firstNameControl,
      lasName: this.lastNameControl,
      email: this.emailControl,
      password: this.passwordControl,
      termsAndConditions: this.termsAndConditionsControl,
    });
  }

  onSubmitForm(): void {
    if (this.registerForm.invalid) {
      [
        this.firstNameControl,
        this.lastNameControl,
        this.emailControl,
        this.passwordControl,
        this.termsAndConditionsControl,
      ].forEach((control) => control.markAsTouched());
    }
  }
}
