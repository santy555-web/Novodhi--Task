import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { registerRective } from "./registerReactive";

@Component({
  selector: 'app-loginreactiveapproch',
  templateUrl: './loginreactiveapproch.component.html',
  styleUrls: ['./loginreactiveapproch.component.css']
})
export class LoginreactiveapprochComponent implements OnInit {

  flag : boolean = true;
Register: registerRective []=[];
 signupForm: FormGroup;
 firstname;
 middlename;
 lastname;
 userName;
 gender;
 email;
 password;
 mobile;
 clg;
 add;
 city;
 state;
 country;
 zip;
 file;
 private cd: ChangeDetectorRef;
 today: number = Date.now();
 statearr:any = ['Maharashtra','Andhr Pradesh','Utter Predesh','Panjab','Karnataka']
 genderarr:any = ['Male','Female', 'Other'];
 countryarr:any = ['India','Canada','USA'];
  constructor() {  }

  ngOnInit(): void {


      this.signupForm    =  new FormGroup({

      firstname: new  FormControl(null, [Validators.required, Validators.minLength(3)  ]),
      middlename: new  FormControl(),
      lastname: new  FormControl(null, [Validators.required, Validators.minLength(3)]),
      userName: new  FormControl(null, [Validators.required]),
      gender:  new FormControl("",[Validators.required] ),
      email:  new  FormControl(null, [Validators.required,Validators.email ]),
      password: new  FormControl(null, [Validators.required,Validators.pattern("")]),
      mobile: new  FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]),
      clg: new  FormControl(null, [Validators.required]),
      add: new  FormControl(null, [Validators.required]),
      city: new  FormControl(null, [Validators.required]),
      state: new  FormControl("", [Validators.required]),
      country: new  FormControl("", [Validators.required]),
      zip: new  FormControl(null, [Validators.required,Validators.maxLength(6),Validators.pattern("^[0-9]{6}$")]),
      file: new  FormControl('',[
        RxwebValidators.file({maxFiles:1}),
        RxwebValidators.extension({extensions:["docs","pdf"]})
      ],),
    });

  }
  onRegister()
  {
    console.log(this.signupForm);
    alert("Registration successful!....");
       this.Register.push(this.signupForm.value);
       console.log(this.Register);
    }



//change State
ChnageState(e)
{
this.state.setValue(e.target.value,{
  onlyself: true
})

}

//file uplode in array
onFileSelected(event) {
  //console.log(event);
  if (event.target.files){

      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event:any ) =>
      {
        this.Register.push(event.target.result);
      }
  }
  }
//this method is for first button for product manu
onclick()
{
  this.flag= !this.flag;
}

onCancelClick()
{
  this.flag=true;
}

}


















