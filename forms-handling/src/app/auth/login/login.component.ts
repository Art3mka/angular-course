import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, of } from 'rxjs';

const mustContainQuestionMark = (control: AbstractControl) => {
  if (control.value.includes('?')) {
    return null;
  }
  return { mustContainQuestionMark: true };
};

const emailIsUnique = (control: AbstractControl) => {
  if (control.value !== 'test@test.com') {
    return of(null);
  }
  return of({ notUnique: true });
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  form = new FormGroup({
    email: new FormControl(
      '',
      [Validators.required, Validators.email],
      [emailIsUnique]
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      mustContainQuestionMark,
    ]),
  });

  ngOnInit(): void {
    const savedForm = window.localStorage.getItem('saved-login-form');

    if (savedForm) {
      const loadedForm = JSON.parse(savedForm);
      this.form.patchValue({
        email: loadedForm.email,
      });
    }

    const subscription = this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe({
        next: (value) => {
          console.log(value);
          window.localStorage.setItem(
            'saved-login-form',
            JSON.stringify(value.email)
          );
        },
      });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  get emailIsInvalid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.invalid &&
      this.form.controls.email.dirty
    );
  }

  get passwordIsInvalid() {
    return (
      this.form.controls.password.touched &&
      this.form.controls.password.invalid &&
      this.form.controls.password.dirty
    );
  }

  onSubmit() {
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;

    console.log(enteredEmail, enteredPassword);
  }
}
