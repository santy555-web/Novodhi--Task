import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-addresstask',
  templateUrl: './addresstask.component.html',
  styleUrls: ['./addresstask.component.css']
})
export class AddresstaskComponent implements OnInit {
  Register: any []=[];
  Register1: any []=[];
  signupForm: FormGroup;
  isReadonly= false;
  flag : boolean = false;
  address;
  city;
  state;
  country;
  district;
  zip;
  phone1;
  phone2;
  mobile_fax;
  personal_email;
  same_address;
  constructor() {  }

  ngOnInit(): void {

    this.signupForm    =  new FormGroup({
      address: new  FormControl(null, [Validators.required]),
      city: new  FormControl(),
      state: new  FormControl(""),
      country: new  FormControl(""),
      district: new  FormControl(""),
      zip: new  FormControl(null, [Validators.pattern("^[0-9]{6}$")]),
      phone1: new  FormControl(null, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]),
      phone2: new  FormControl(null, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]),
      mobile_fax: new  FormControl(),
      personal_email: new  FormControl(null,[Validators.email]),
      same_address: new  FormControl(),
    });

    this.signupForm.valueChanges.subscribe((x)=> this.updateaddress(x));
  }

  



  //this method is for add the data in array first
  onRegister()
  {
    this.Register.push(this.signupForm.value);
    alert("Data Added successful!....");
    console.log('Current Address',this.Register);
    console.log('Permanent Address',this.Register);
  }

  //this method is for same address on click of checkbox
  onclick()
    {
      this.flag=true;
      this.isReadonly=!this.isReadonly;
    }


 //this method is for add the data in array second
    onRegister1()
    {
      this.Register1.push(this.signupForm.value);
      alert("Data Added successfully!....");

    }


//this method is disbled upto data is not present in array
OnNextClick1()
{
 if( this.Register1.length ==0)
 {
  {return true;}
 }
}

//update the values for same address details
updateaddress(val:boolean){
  if(val){
          this.address=this.signupForm.get('address').value;
          this.city=this.signupForm.get('city').value;
          this.state=this.signupForm.get('state').value;
          this.country=this.signupForm.get('country').value;
          this.district=this.signupForm.get('district').value;
          this.zip=this.signupForm.get('zip').value;
          this.phone2=this.signupForm.get('phone2').value;
          this.phone1=this.signupForm.get('phone1').value;
          this.mobile_fax=this.signupForm.get('mobile_fax').value;
          this.personal_email=this.signupForm.get('personal_email').value

        }
     else{
          this.address=null;
          this.city=null;
          this.state=null;
          this.country=null;
          this.district=null;
          this.zip=null
          this.phone2=null
          this.phone1=null
          this.mobile_fax=null
          this.personal_email=null
          }

}






}
