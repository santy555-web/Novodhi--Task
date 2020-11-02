import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {
  flag3 : boolean = true;
  flag4 : boolean = false;
  flag5 : boolean = false;
  flag6 : boolean = false;
  flag7 : boolean = false;
  flag8 : boolean = false;
  flag9 : boolean = false;

  basicinfo: any []=[];
  basicinfo_age;
  BasicinfoFrom: FormGroup;


  addressDetails: any []=[];
  addressDetails_1: any []=[];
  isReadonly= false;
  flag1 : boolean = false;
  addressDetails_address;
  addressDetails_city;
  addressDetails_state;
  addressDetails_country;
  addressDetails_district;
  addressDetails_zip;
  addressDetails_phone1;
  addressDetails_phone2;
  addressDetails_mobile_fax;
  addressDetails_personal_email;
  addressDetails_same_address;
  addressDetailsFrom: FormGroup;



  personalDetails: any [] = [];
  personalDetailsFrom: FormGroup;



  bankDetails: any [] = [];
  bankDetailsFrom: FormGroup;



  qualificationDetails: any [] = [];
  qualificationinvalidNamesArr: any [] = [];
  qualification_qualification;
  qualification_institute;
  qualification_passing_year;
  qualification_score;
  qualification_onChange;
  qualification_qualification_area;
  qualificationForm: FormGroup;
  flag2:boolean = true;
  res;



  employmentDetails: any[]=[];
  employment_fromDate;
  employment_toDate;
  employment_company;
  employment_designation;
  employment_relevant;
  employment_nrelevant;
  employment_duration;
  //flag3:boolean = false;
  employmentForm: FormGroup;




  skillDetails: any [] = [];
  skillDetailsFrom: FormGroup;


  constructor(private ang:FormBuilder) { }

  ngOnInit(): void {


      /* basic information table start here */
      this.BasicinfoFrom   =  new FormGroup({
      basicinfo_employee_number: new  FormControl(null, [Validators.required]),
      basicinfo_employee_title: new  FormControl(""),
      basicinfo_employee_name: new  FormControl(null, [Validators.required]),
      basicinfo_employee_address: new  FormControl(),
      basicinfo_firstname: new  FormControl(null, [Validators.required, Validators.minLength(3)  ]),
      basicinfo_middlename: new  FormControl(),
      basicinfo_lastname: new  FormControl(),
      basicinfo_initial: new  FormControl(null, Validators.pattern('[a-zA-Z0-9_]*')),
      basicinfo_gender:  new FormControl("Male"),
      basicinfo_dob: new  FormControl(null, [Validators.required]),
      basicinfo_age: new  FormControl(),
      basicinfo_official_phone: new  FormControl(),
      basicinfo_mobile: new  FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]),
      basicinfo_fax: new  FormControl(),
      basicinfo_official_email:  new  FormControl(null, [Validators.email ]),
      basicinfo_personal_email:  new  FormControl(null, [Validators.email,Validators.required ]),
      basicinfo_personal2_email:  new  FormControl(null,[Validators.email ]),
      basicinfo_personal3_email:  new  FormControl(null,[Validators.email]),
      basicinfo_file: new  FormControl('',[
        RxwebValidators.file({maxFiles:1}),
        RxwebValidators.extension({extensions:["jpg","png"]})
      ],),
    });
    //it will update the age on the basis od date changed by user
    this.BasicinfoFrom.get('basicinfo_dob').valueChanges.subscribe((x)=>this.AgeCalculation(x));
    /* basic information table end here */






    /* Address information table start here */

          this.addressDetailsFrom    =  new FormGroup({
            addressDetails_address: new  FormControl(null, [Validators.required]),
            addressDetails_city: new  FormControl(),
            addressDetails_state: new  FormControl(""),
            addressDetails_country: new  FormControl(""),
            addressDetails_district: new  FormControl(""),
            addressDetails_zip: new  FormControl(null, [Validators.pattern("^[0-9]{6}$")]),
            addressDetails_phone1: new  FormControl(null, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]),
            addressDetails_phone2: new  FormControl(null, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]),
            addressDetails_mobile_fax: new  FormControl(),
            addressDetails_personal_email: new  FormControl(null,[Validators.email]),
            addressDetails_same_address: new  FormControl(),
          });

          this.BasicinfoFrom.valueChanges.subscribe((x)=> this.updateaddress(x));

          /* Address information table end here */








        /* Personal Details information table start here */

        this.personalDetailsFrom =  new FormGroup({
          personalDetails_birthplace: new  FormControl(null, [Validators.required]),
          personalDetails_religion: new  FormControl(""),
          personalDetails_caste: new  FormControl(""),
          personalDetails_domicile: new  FormControl(),
          personalDetails_nationality: new  FormControl("", [Validators.required]),
          personalDetails_voterid: new  FormControl(null,[Validators.minLength(10)]),
          personalDetails_pan: new  FormControl(null, [Validators.required]),
          personalDetails_aadhaar: new  FormControl(null, [Validators.required, Validators.minLength(12)]),
          personalDetails_marriage_status: new  FormControl(""),
          personalDetails_no_children: new  FormControl(null,[Validators.pattern("^[0-7]{1}$")]),
          personalDetails_marriage_date: new  FormControl(),
          personalDetails_spouse_name: new  FormControl(null, Validators.pattern('[a-zA-Z_]*')),
          });

        /* Personal Details information end here */



        /* Bank Details information start here */
        this.bankDetailsFrom =  new FormGroup({
          bankDetails_bank_name: new  FormControl(null, [Validators.required]),
          bankDetails_account_type: new  FormControl(),
          bankDetails_account_number:new FormControl(null, [Validators.required]),
          bankDetails_peyment_type: new  FormControl(null, [Validators.required]),
          bankDetails_branch_detail: new  FormControl(),
          bankDetails_ifsc: new  FormControl(null, [Validators.required]),
          bankDetails_reimbursement_name: new  FormControl(),
          bankDetails_reimbursement_number: new  FormControl(),
        });
      /* Bank Details information end here */



      /* Qualification details information end here */

      this.qualificationForm =  this.ang.group
      ({
        qualification_details: this.ang.array([this.qualification_Group()]),
      });

      this.qualificationForm.controls['qualification_details'].valueChanges.subscribe(value => {});

      /* Qualification details information end here */




      /* Employment details information end here */

      this.employmentForm =  this.ang.group({

        employment_details: this.ang.array([this.employment_Group()]),
      });

      /* Employment details information end here */




     /* skill details information start here */
        this.skillDetailsFrom =  this.ang.group({
          skillset_details: this.ang.array([this.skillset_Group()]),
          });
    /* skill details information end here */


  }







  /* basic information table start here */

 //this method is for submit data
 basicinfo_onRegister()
 {
   this.basicinfo.push(this.BasicinfoFrom.value);
   console.log('Basic Information',this.basicinfo);
   alert("Data Added successfully!....");

 }

//Age calculation
AgeCalculation(val: Date){
 var today = new Date();
 var year= today.getFullYear();
 var birthDate= new Date(val).getFullYear();
 var a=year-birthDate;
 //console.log(a);
this.BasicinfoFrom.get('basicinfo_age').setValue(a);
}
//file uplode in array
basicinfo_onFileSelected(event) {

 if (event.target.files){

     var reader = new FileReader();

     reader.readAsDataURL(event.target.files[0]);

     reader.onload = (event:any ) =>
     {
       this.basicinfo.push(event.target.result);
     }
 }
 }


//this method (basicinfo) is disbled the button upto data is not present in array
basicinfo_OnNextClick()
  {

   if( this.basicinfo.length ==0)
   {
     return true;
   }

  }
/* basic information table end here */

basicinfo_OnNextClick1()
{
  this.flag3=false;
  this.flag4=true;
}






 /* Address information table start here */

//this method is for add the data in array first
addressDetails_onRegister()
{
  this.addressDetails.push(this.addressDetailsFrom.value);
  alert("Data Added successful!....");
  console.log('Current Address',this.addressDetails);


}

//this method is for same address on click of checkbox
addressDetails_onclick()
  {
    this.flag1=true;
    this.isReadonly=!this.isReadonly;
  }


//this method is for add the data in array second
addressDetails_onRegister1()
  {
    this.addressDetails_1.push(this.addressDetailsFrom.value);
    alert("Data Added successfully!....");
    console.log('Permanent Address',this.addressDetails_1);
  }


//this method is disbled upto data is not present in array
addressDetails_OnNextClick()
    {
    if( this.addressDetails_1.length ==0)
      {
        {return true;}
      }
  }

  addressDetails_OnNextClick1()
  {
    this.flag4=false;
    this.flag5=true;
  }

  addressDetails_OnPreviousClick()
  {

    this.flag3 =true;
    this.flag4 =false;
  }

//update the values for same address details
updateaddress(val:boolean){
if(val){
        this.addressDetails_address=this.addressDetailsFrom.get('addressDetails_address').value;
        this.addressDetails_city=this.addressDetailsFrom.get('addressDetails_city').value;
        this.addressDetails_state=this.addressDetailsFrom.get('addressDetails_state').value;
        this.addressDetails_country=this.addressDetailsFrom.get('addressDetails_country').value;
        this.addressDetails_district=this.addressDetailsFrom.get('addressDetails_district').value;
        this.addressDetails_zip=this.addressDetailsFrom.get('addressDetails_zip').value;
        this.addressDetails_phone2=this.addressDetailsFrom.get('addressDetails_phone2').value;
        this.addressDetails_phone1=this.addressDetailsFrom.get('addressDetails_phone1').value;
        this.addressDetails_mobile_fax=this.addressDetailsFrom.get('addressDetails_mobile_fax').value;
        this.addressDetails_personal_email=this.addressDetailsFrom.get('addressDetails_personal_email').value

      }
   else{
        this.addressDetails_address=null;
        this.addressDetails_city=null;
        this.addressDetails_state=null;
        this.addressDetails_country=null;
        this.addressDetails_district=null;
        this.addressDetails_zip=null
        this.addressDetails_phone2=null
        this.addressDetails_phone1=null
        this.addressDetails_mobile_fax=null
        this.addressDetails_personal_email=null
        }

}

/* Address information table end here */







/* Personal details information table start here */

  //this is for data Addition in array
  personalDetails_onRegister(event: Event)
  {
    this.personalDetails.push(this.personalDetailsFrom.value);
    alert("Data added successful!....");
    console.log('Personal Details',this.personalDetails);
  }

//this method is disbled upto data is not present in array
personalDetails_OnNextClick()
      {
      if( this.personalDetails.length ==0)
        {
          return true;
        }
      }


personalDetails_OnNextClick1()
      {
        this.flag5=false;
        this.flag6=true;
      }

personalDetails_OnPreviousClick()
      {
        this.flag4=true;
        this.flag5=false;

      }


/* Personal details information table end here */






    /* Bank details information start here */

 //to store data in array
 bankDetails_onRegister()
    {
      this.bankDetails.push(this.bankDetailsFrom.value);
      console.log('Bank Details',this.bankDetails);
      alert("Data added successful!....");
      }


    //this method is disbled upto data is not present in array
    bankDetails_OnNextClick()
    {
     if( this.bankDetails.length ==0)
     {
       return true;
     }
    }


  bankDetails_OnNextClick1()
  {
    this.flag6=false;
    this.flag7=true;
  }

  bankDetails_OnPreviousClick()
  {
    this.flag5=true;
    this.flag6=false;
  }
    /* Bank details information end here */







    /* qualification details information end here */

    //this is for group of array in oninit method
  qualification_Group()
  {
      return this.ang.group
      ({
        qualification_qualification: new FormControl(null,[Validators.required]),
        qualification_institute:new FormControl (null,[Validators.required]),
        qualification_passing_year: new FormControl (null,[Validators.required]),
        qualification_score: new FormControl (null,[Validators.required]),
        qualification_qualification_area: new FormControl (null,[Validators.required]),

      });
  }


  qualification_onclickFlag(){
    this.flag2 = !this.flag2;
  }

//start here
qualification_onAddDetail(): void
      {
        this.qualificationDetails.push(this.qualificationForm.value);
        console.log('Qualification Details',this.qualificationDetails);

      }

  get qualiArray()
  {
    return<FormArray>this.qualificationForm.get('qualification_details');
  }

//add the qualicatin box
  addqualification()
  {
    this.qualiArray.push(this.qualification_Group());
  }

//delete the item from Qualification table
  deletequalification(index)
  {
  this.qualiArray.removeAt(index);
  }

  //for clear data
  qualification_myReset()
  {
  this.qualiArray.reset();
  }


qualification_addang() {
  const control = <FormArray>this.qualificationForm.get('qualification_details');
  control.push(this.qualification_Group());
}


//get details from Qualifications
qualification_getang(form): Array<any> {
  return form.controls.qualification_details.controls;
}

qualification_Duplicate(quali): boolean {
  let myArray = this.qualification_getang(this.qualificationForm);
  let test = myArray.filter(data => data.controls.qualification_qualification.value == quali && quali != null)
  if (test.length > 1) {
    return true;
  } else {
    return false
  }
}





//this is for save button
qualification_onSaveDetail(control: AbstractControl)
{
   if (this.qualificationDetails.length == 0)
   {
     alert("Data is not Added...") ;
   }
   alert("Data Added Successfully!...");
 }


//this for hiding next button
qualification_OnClickAdd()
 {
  if( this.qualificationDetails.length == 0 )
  {
    return true;
  }

 }

 qualification_OnClickAdd1()
 {
  this.flag7=false;
  this.flag8=true;
 }

 qualification_OnClickPrevious()
 {
  this.flag6=true;
  this.flag7=false;
 }


 /* Qualification details information end here */







    /* Employment details information start here */


//this is for group of array in oninit method
employment_Group()
  {
    return this.ang.group
    ({
      fromto: new FormGroup({
        employment_fromDate: new  FormControl( null, [Validators.required ]),
        employment_toDate: new  FormControl( null, [Validators.required ]),
      },  [this.fromToDate('employment_fromDate', 'employment_toDate').bind(this)]
      ),
      employment_company: new  FormControl(null, [Validators.required]),
      employment_designation: new  FormControl(null, [Validators.required]),
      employment_relevant: new  FormControl(null, [Validators.required]),
      employment_nrelevant: new  FormControl(null, [Validators.required]),
    });
  }




//validation it will check value from date value less than or not
  fromToDate(employment_fromDate: string, employment_toDate: string)
  {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[employment_fromDate];
      let t = group.controls[employment_toDate];
      if (f.value > t.value) {
        return {
          dates: "From Date should be less than to Date"
        };
      }
      return {};
    }
  }


  //get details from employee
  employment_getang(form): Array<any> {
  return form.controls.employment_details.controls;
}

Overlapping(fromDate): boolean {
  let myArray = this.employment_getang(this.employmentForm);
  let test = myArray.filter(data => data.controls.fromto.get('employment_toDate').value >= fromDate && fromDate != null)
  if (test.length > 1) {
    return true;
  } else {
    return false;
  }
}


employment_Duplicate(fromDate): boolean {
  let myArray = this.employment_getang(this.employmentForm);
  let test = myArray.filter(data => data.controls.fromto.get('employment_fromDate').value == fromDate && fromDate != null)
  if (test.length > 1) {
    return true;
  } else {
    return false
  }
}

fromToDateValidation(employment_toDate): boolean {
  let myArray = this.employment_getang(this.employmentForm);
  let test = myArray.filter(data => data.controls.fromto.get('employment_fromDate').value > employment_toDate && employment_toDate != null)
     // the fromDate and toDate are numbers. In not convert them first after null check
      if (test !== null ) {
          return true;
      }
      return false;
  };



employment_onAddDetail(): void
  {
    this.employmentDetails.push(this.employmentForm.value);
    console.log('Employment Details', this.employmentDetails);
  }


get EmployeeArray()
  {
    return<FormArray>this.employmentForm.get('employment_details');
  }




addemployment()
  {
    this.EmployeeArray.push(this.employment_Group());
  }

deleteemployment(index)
  {
    this.EmployeeArray.removeAt(index);
  }

employment_myReset(index)
  {
    this.EmployeeArray.reset(index);
  }


  employment_onSaveDetail(control: AbstractControl)
    {
      if (this.employmentDetails.indexOf(control.value) >= 0)
       {
         alert("Data is not Added...") ;
       }
       alert("Data is Added Successfully!...");
     }

     employment_OnClickAdd()
    {
     if( this.employmentDetails.length ==0)
     {
       return true;
     }

    }

    employment_OnClickPrevious()
    {
      this.flag7=true;
      this.flag8=false;
    }

    employment_OnClickAdd1()
    {
      this.flag8=false;
      this.flag9=true;
    }
    /* Employment details information end here */





  /* skill details information start here */


  //this is for group of array in oninit method
  skillset_Group()
    {
      return this.ang.group
      ({
      skill_category: new  FormControl(),
      skill: new  FormControl(),
      skill_level: new  FormControl(""),
      iscurrent: new  FormControl(""),
      experience: new  FormControl(),
      remarks: new  FormControl(),
      });
    }

//start here
skill_onAddDetail(): void {
  //this.skillDetails.push(this.skillDetailsFrom.value);
  this.skillDetails.push(this.skillDetailsFrom.get('skillset_details').value);
  console.log('Skill Set Data',this.skillDetails);
  }

get skillsetArray()
{
return<FormArray>this.skillDetailsFrom.get('skillset_details');
}

addskillset()
{
this.skillsetArray.push(this.skillset_Group());
}

deleteskillset(index)
{
this.skillsetArray.removeAt(index);
}

myReset(index)
{
this.skillsetArray.reset(index);
}

 //end data
 getang(form): Array<any> {
  return form.controls.skillset_details.controls;
}

skill_Duplicate(skill): boolean {
  let myArray = this.getang(this.skillDetailsFrom);
  let test = myArray.filter(data => data.controls.skill.value == skill && skill != null)
  if (test.length > 1) {
    return true;
  } else {
    return false
  }
}


skill_onSaveDetail(control: AbstractControl)
  {
     if (this.skillDetails.indexOf(control.value) >= 0)
     {
       alert("Data is not Added...") ;
     }
     alert("Data is Added Successfully!...");
   }



   skill_onRegister(control: AbstractControl)
   {
      if (this.skillDetails.indexOf(control.value) == 0)
      {
        alert(" Register is Successfully!...");
      }
      alert("Register Successfully!...");
    }



//this method is for button hide and if data present in array then save button will be enable
skill_OnClickAdd()
   {
    if( this.skillDetails.length ==0 )
    {
      return true;
    }

   }

   skill_OnClickPrevious()
   {
    this.flag9=false;
    this.flag8=true;
   }

   skill_onSubmitDetail()
    {
      alert("Data is Added Successfully!...");
    }





  /* skill details information end here */

}
