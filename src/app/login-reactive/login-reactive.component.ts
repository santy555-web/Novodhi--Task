import { Component, OnInit } from '@angular/core';
//whenever you want to use this classes we need to import from angular/forms
import { AbstractControl,  FormArray,  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {
  //create a new object of signupform that is formgroup
  signupForm: FormGroup;
  invalidNamesArr: string[] = ['hello', 'angular'];
  constructor() {}

  ngOnInit(): void
  {
    //create a new object of signupform that is formgroup
    this.signupForm = new FormGroup
    (
      {
      //validators applied on input such as user_name, user_email,password,confirm_password,user_hobbies,user_phone user_notificatin
      user_name: new FormControl(null, [Validators.required, Validators.minLength(5),this.invalidUserNameValidation.bind(this),]),
      user_email: new FormControl(null, [Validators.required,Validators.email,]),
      user_phone:new FormControl(null),
      //create a group for password to compare the conform password and password
      password_group: new FormGroup
      (
        {
          password: new FormControl(null, [Validators.required]),
          confirm_password: new FormControl(null, [Validators.required]),
        },[this.matchPasswords.bind(this)]
      ),
      user_notification: new FormControl("email"),
      user_hobbies:new FormArray([]),
      }
    );
    this.signupForm.get("user_notification").valueChanges.subscribe((x)=>this.setNotificationValidation(x));
  }

  //this is method foe set Notification phone or email
  setNotificationValidation(value:string)
    {
      const phone=this.signupForm.get('user_phone');
      const email=this.signupForm.get('user_email');
          if(value=="phone")
          {
            phone.setValidators(Validators.required);
            email.clearValidators();
            email.setValidators(Validators.email);
          }
          else
          {
            email.setValidators([Validators.required,Validators.email]);
            phone.clearValidators();
          }
        phone.updateValueAndValidity();
        email.updateValueAndValidity();
    }

  //it wiil show the data
  onSignup() {
               console.log(this.signupForm);
             }


  //this method is for name validatin which is predefined
  invalidUserNameValidation(control: AbstractControl):
       { [key: string]: boolean }
       {
          if (this.invalidNamesArr.indexOf(control.value) >= 0)
          {
          return { invalidName: true };
          }
          return null;
        }


  //this method is for password match filled
  matchPasswords(control: AbstractControl): { [key: string]: boolean }
  {
    if (
        control.get('password').value != control.get('confirm_password').value
       )
    {
      return { passwordMatchError: true };
    }
    return null;
  }


//this method is for return the array of user hobbies
getControl()
{
      return (<FormArray> this.signupForm.get('user_hobbies')).controls;
}

//this method is for add new hobbies in the array
onAddHobbiesClick()
{
  if(this.signupForm.get('user_hobbies').value.length<3)
    {
      const control = new FormControl(null);
      (this.signupForm.get('user_hobbies')as FormArray).push(control);
    }
  else
    {
      alert("Max 3 Hobbies are allowed!...");
    }
}


//this method is for remove the hobbies section
onRemoveHobbiesClick(i)
  {
    (this.signupForm.get("user_hobbies")as FormArray).removeAt(i);
  }



}
