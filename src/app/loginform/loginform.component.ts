import { Component, OnInit } from '@angular/core';
import { AbstractControl,  FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  signupForm: FormGroup;
  constructor() {
    this.signupForm = new FormGroup({
      user_email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required
      ]),
    });



   }

  ngOnInit(): void {
  }

  onSignup() {
    console.log(this.signupForm);
  }

}
