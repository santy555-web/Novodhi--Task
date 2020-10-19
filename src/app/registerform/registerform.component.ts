import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl,  FormControl, FormGroup, Validators } from '@angular/forms';
import { register } from '../registerform/register';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
@Input()Register: register []=[];
  today: number = Date.now();
  name;
  email;
  mobile;
  pass;
  cpass;

  signupForm: FormGroup;
  invalidNamesArr: string[] = ['hello', 'angular'];

  constructor() { }

  ngOnInit(): void {

    this.signupForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        this.invalidUserNameValidation.bind(this),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),

      mobile: new FormControl(null, [
        Validators.required,
        Validators.maxLength(13),
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
      ]),

      password_group: new FormGroup(
        {
          pass: new FormControl(null, [Validators.required]),
          cpass: new FormControl(null, [Validators.required]),
        },
        [this.matchPasswords.bind(this)]
      ),
    });


  }

  onRegister() {
    console.log(this.signupForm);
    alert("Registration successful!....");
    this.Register.push(new register(this.name, this.email, this.mobile, this.pass, this.cpass));

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
      control.get('pass').value != control.get('cpass').value
    ) {
      return { passwordMatchError: true };
    }
    return null;
  }



}
