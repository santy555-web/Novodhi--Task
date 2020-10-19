import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {
  Register: any []=[];
  age;
  signupForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.signupForm    =  new FormGroup({
      employee_number: new  FormControl(null, [Validators.required]),
      employee_title: new  FormControl(""),
      employee_name: new  FormControl(null, [Validators.required]),
      employee_address: new  FormControl(),
      firstname: new  FormControl(null, [Validators.required, Validators.minLength(3)  ]),
      middlename: new  FormControl(),
      lastname: new  FormControl(),
      initial: new  FormControl(),
      gender:  new FormControl("Male"),
      dob: new  FormControl(null, [Validators.required]),
      employee_age: new  FormControl(),
      official_phone: new  FormControl(),
      mobile: new  FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]),
      fax: new  FormControl(),
      official_email:  new  FormControl(null, [Validators.email ]),
      personal_email:  new  FormControl(null, [Validators.email,Validators.required ]),
      personal2_email:  new  FormControl(null,[Validators.email ]),
      personal3_email:  new  FormControl(null,[Validators.email]),
      file: new  FormControl('',[
        RxwebValidators.file({maxFiles:1}),
        RxwebValidators.extension({extensions:["jpg","png"]})
      ],),
    });
//it update the value changed by user
    this.signupForm.get('dob').valueChanges.subscribe((x)=>this.AgeCalculation(x));
  }


  //this method is for submit data
  onRegister()
  {
    this.Register.push(this.signupForm.value);
    console.log('Basic Information',this.Register);
    alert("Data Added successfully!....");

  }


//Age calculation
AgeCalculation(val: Date){
  var today = new Date();
  var year= today.getFullYear();
  var birthDate= new Date(val).getFullYear();
  var a=year-birthDate;
  //console.log(a);
  this.age=a;
}



//file uplode in array
onFileSelected(event) {

  if (event.target.files){

      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event:any ) =>
      {
        this.Register.push(event.target.result);
      }
  }
  }

//this method is disbled upt dta is not present in array
  OnNextClick()
   {
    if( this.Register.length ==0)
    {
      return true;

    }
   }

}
