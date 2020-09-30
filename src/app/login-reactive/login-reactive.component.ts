import { Component, OnInit } from '@angular/core';
import { AbstractControl,  FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {
  signupForm: FormGroup;
  invalidNamesArr: string[] = ['hello', 'angular'];
  constructor() {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      user_name: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        this.invalidUserNameValidation.bind(this),
      ]),
      user_email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password_group: new FormGroup(
        {
          password: new FormControl(null, [Validators.required]),
          confirm_password: new FormControl(null, [Validators.required]),
        },
        [this.matchPasswords.bind(this)]
      ),
    });
  }
  onSignup() {
    console.log(this.signupForm);
  }
  invalidUserNameValidation(
    control: AbstractControl
  ): { [key: string]: boolean } {
    if (this.invalidNamesArr.indexOf(control.value) >= 0) {
      return { invalidName: true };
    }
    return null;
  }
  matchPasswords(control: AbstractControl): { [key: string]: boolean } {
    if (
      control.get('password').value != control.get('confirm_password').value
    ) {
      return { passwordMatchError: true };
    }
    return null;
  }
}
