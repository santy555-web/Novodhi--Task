import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-personaldetail',
  templateUrl: './personaldetail.component.html',
  styleUrls: ['./personaldetail.component.css']
})
export class PersonaldetailComponent implements OnInit {
  Register: any []=[];
  signupForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.signupForm =  new FormGroup({
      birthplace: new  FormControl(null, [Validators.required]),
      religion: new  FormControl(""),
      caste: new  FormControl(""),
      domicile: new  FormControl(),
      nationality: new  FormControl("", [Validators.required]),
      voterid: new  FormControl(),
      pan: new  FormControl(null, [Validators.required]),
      aadhaar: new  FormControl(null, [Validators.required]),
      marriage_status: new  FormControl(""),
      no_children: new  FormControl(),
      marriage_date: new  FormControl(),
      spouse_name: new  FormControl(),
      });
  }

  //this is for data Addition in array
  onRegister()
  {
    this.Register.push(this.signupForm.value);
    alert("Data added successful!....");
    console.log('Personal Details',this.Register);
  }

//this method is disbled upto data is not present in array
OnNextClick()
{
 if( this.Register.length ==0)
 {
  return true;
 }
}

}
