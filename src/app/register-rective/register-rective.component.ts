import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { password, required } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-register-rective',
  templateUrl: './register-rective.component.html',
  styleUrls: ['./register-rective.component.css']
})
export class RegisterRectiveComponent implements OnInit {

  signupForm : FormGroup;
  constructor() { }

  ngOnInit(): void {

    this.signupForm = new FormGroup({
      name:new FormControl(null,[Validators.required]),
      gmail: new FormControl(null,[Validators.required,Validators.email]),

      passGroup: new FormGroup({
      pass: new FormControl(null,[Validators.required]),
      cpass: new FormControl(null,[Validators.required]),
     },
     [this.matchPasswords.bind(this)]
      ),

    });

  }


  onRegister(){
    console.log(this.signupForm);
  }

matchPasswords(control: AbstractControl):{ [key:string]:boolean}
{
  if(control.get('pass').value != control.get('cpass').value)
  {
    return {passNotMatchError: true};
  }
  return null;
}


}

