import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-bankdetail',
  templateUrl: './bankdetail.component.html',
  styleUrls: ['./bankdetail.component.css']
})
export class BankdetailComponent implements OnInit {
  Register: any []=[];
  signupForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.signupForm =  new FormGroup({
      bank_name: new  FormControl(null, [Validators.required]),
      account_type: new  FormControl(),
      account_number:new FormControl(null, [Validators.required]),
      peyment_type: new  FormControl(null, [Validators.required]),
      branch_detail: new  FormControl(),
      ifsc: new  FormControl(null, [Validators.required]),
      reimbursement_name: new  FormControl(),
      reimbursement_number: new  FormControl(),
    });
  }


  //to store data in array
  onRegister()
  {
    this.Register.push(this.signupForm.value);
    console.log('Bank Details',this.Register);
    alert("Data added successful!....");
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
