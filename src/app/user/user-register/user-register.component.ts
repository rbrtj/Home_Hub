import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';

export class ConfirmPasswordErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const password = control?.parent?.get('password')?.value;
    const confirmPassword = control?.value;
    return !!(
      password &&
      confirmPassword &&
      password !== confirmPassword &&
      control?.dirty
    );
  }
}

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './user-register.component.html',
})
export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  confirmPasswordMatcher = new ConfirmPasswordErrorStateMatcher();

  constructor() {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup(
      {
        userName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
        phone: new FormControl(''),
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: any } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password &&
      confirmPassword &&
      password.value !== confirmPassword.value
      ? { mismatch: true }
      : null;
  }

  onSubmit() {
    console.log(this.registrationForm);
    console.log(this.registrationForm.hasError('mismatch'));
  }
}
