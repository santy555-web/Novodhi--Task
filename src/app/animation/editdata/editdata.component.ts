import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { AnimationService } from '../animation.service';
import { BasicForm,employment,paddress,quali,skill } from "../basicform";

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {
  flag3 : boolean = true;
  flag4 : boolean = false;
  flag5 : boolean = false;
  flag6 : boolean = false;
  flag7 : boolean = false;
  flag8 : boolean = false;
  flag9 : boolean = false;
  counter:number;
  basicinfo: BasicForm []=[];
  basicinfo_age;
  BasicinfoFrom: FormGroup;
  imagePath:String;

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

  addressDetails_address1;
  addressDetails_city1;
  addressDetails_state1;
  addressDetails_country1;
  addressDetails_district1;
  addressDetails_zip1;
  addressDetails_phone11;
  addressDetails_phone21;
  addressDetails_mobile_fax1;
  addressDetails_personal_email1;

  qualification_qualification;
  qualification_institute;
  qualification_passing_year;
  qualification_score;
  qualification_onChange;
  qualification_qualification_area;
  qualificationForm: FormGroup;
  flag2:boolean = true;
  res;

  employment_fromDate;
  employment_toDate;
  employment_company;
  employment_designation;
  employment_relevant;
  employment_nrelevant;
  employment_duration;

  constructor(private ang:FormBuilder, private data:AnimationService) { }

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
        RxwebValidators.extension({extensions:[".jpg",".png"]})
      ],),

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

          bankDetails_bank_name: new  FormControl(null, [Validators.required]),
          bankDetails_account_type: new  FormControl(),
          bankDetails_account_number:new FormControl(null, [Validators.required]),
          bankDetails_peyment_type: new  FormControl(null, [Validators.required]),
          bankDetails_branch_detail: new  FormControl(),
          bankDetails_ifsc: new FormControl(null, [Validators.required]),
          bankDetails_reimbursement_name: new  FormControl(),
          bankDetails_reimbursement_number: new  FormControl(),

          addressDetails_address: new FormControl(null, [Validators.required]),
            addressDetails_city: new FormControl(),
            addressDetails_state: new FormControl(""),
            addressDetails_country: new FormControl(""),
            addressDetails_district: new FormControl(""),
            addressDetails_zip: new FormControl(null, [Validators.pattern("^[0-9]{6}$")]),
            addressDetails_phone1: new FormControl(null, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]),
            addressDetails_phone2: new FormControl(null, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]),
            addressDetails_mobile_fax: new FormControl(),
            addressDetails_personal_email: new FormControl(null,[Validators.email]),
            addressDetails_same_address: new FormControl(),


            addressDetails_address1: new FormControl(null, [Validators.required]),
            addressDetails_city1: new FormControl(),
            addressDetails_state1: new FormControl(""),
            addressDetails_country1: new FormControl(""),
            addressDetails_district1: new FormControl(""),
            addressDetails_zip1: new FormControl(null, [Validators.pattern("^[0-9]{6}$")]),
            addressDetails_phone11: new FormControl(null, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]),
            addressDetails_phone21: new FormControl(null, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]),
            addressDetails_mobile_fax1: new FormControl(),
            addressDetails_personal_email1: new FormControl(null,[Validators.email]),

            qualification_details: this.ang.array([this.qualification_Group()]),
            employment_details: this.ang.array([this.employment_Group()]),
            skillset_details: this.ang.array([this.skillset_Group()])


    });

    this.BasicinfoFrom.get('basicinfo_dob').valueChanges.subscribe((x)=>this.AgeCalculation(x));
    this.BasicinfoFrom.valueChanges.subscribe((x)=> this.updateaddress(x));
    this.BasicinfoFrom.controls['qualification_details'].valueChanges.subscribe(value => {});
  }

  basicinfo_onRegister()
 {
   this.data.addBasicForm(this.BasicinfoFrom.value).subscribe((x)=>
    {
      this.basicinfo.push(this.BasicinfoFrom.value);
      alert("Data Added successfully!....")
      console.log('Basic Information', JSON.stringify(this.BasicinfoFrom.value));
      console.log('array',+ this.BasicinfoFrom.get(['qualification_details','0']).value);
    });
 }


AgeCalculation(val: Date){
 var today = new Date();
 var year= today.getFullYear();
 var birthDate= new Date(val).getFullYear();
 var a=year-birthDate;
this.BasicinfoFrom.get('basicinfo_age').setValue(a);
}

basicinfo_onFileSelected(event) {
 if (event.target.files)
  {
     var reader = new FileReader();
     reader.readAsDataURL(event.target.files[0]);
     reader.onload = (event:any ) =>
     {
       this.basicinfo.push(event.target.result);
     }
  }
 }


 onSelectedFile(event)
 {
  if(event.target.files.length>0)
  {
    const file= event.target.files[0];
    this.BasicinfoFrom.get('basicinfo_file').setValue(file);
  }
 }


basicinfo_OnNextClick1()
{
  this.flag3=false;
  this.flag4=true;
}


addressDetails_onclick()
{
  this.flag1=true;
  this.isReadonly=!this.isReadonly;
}



updateaddress(val:boolean){
  if(val){
          this.addressDetails_address1=this.BasicinfoFrom.get('addressDetails_address').value;
          this.addressDetails_city1=this.BasicinfoFrom.get('addressDetails_city').value;
          this.addressDetails_state1=this.BasicinfoFrom.get('addressDetails_state').value;
          this.addressDetails_country1=this.BasicinfoFrom.get('addressDetails_country').value;
          this.addressDetails_district1=this.BasicinfoFrom.get('addressDetails_district').value;
          this.addressDetails_zip1=this.BasicinfoFrom.get('addressDetails_zip').value;
          this.addressDetails_phone21=this.BasicinfoFrom.get('addressDetails_phone2').value;
          this.addressDetails_phone11=this.BasicinfoFrom.get('addressDetails_phone1').value;
          this.addressDetails_mobile_fax1=this.BasicinfoFrom.get('addressDetails_mobile_fax').value;
          this.addressDetails_personal_email1=this.BasicinfoFrom.get('addressDetails_personal_email').value;


        }
     else{
          this.addressDetails_address1=null;
          this.addressDetails_city1=null;
          this.addressDetails_state1=null;
          this.addressDetails_country1=null;
          this.addressDetails_district1=null;
          this.addressDetails_zip1=null;
          this.addressDetails_phone21=null;
          this.addressDetails_phone11=null;
          this.addressDetails_mobile_fax1=null;
          this.addressDetails_personal_email1=null;
        }

  }

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

  get qualiArray()
  {
    return<FormArray>this.BasicinfoFrom.get('qualification_details');
  }


  addqualification()
  {
    this.qualiArray.push(this.qualification_Group());
  }


  deletequalification(index)
  {
  this.qualiArray.removeAt(index);
  }


  qualification_myReset()
  {
  this.qualiArray.reset();
  }


qualification_getang(form): Array<any> {
  return form.controls.qualification_details.controls;
}

qualification_Duplicate(quali): boolean {
  let myArray = this.qualification_getang(this.BasicinfoFrom);
  let test = myArray.filter(data => data.controls.qualification_qualification.value == quali && quali != null)
  if (test.length > 1) {
    return true;
  } else {
    return false
  }
}










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


  employment_getang(form): Array<any> {
    return form.controls.employment_details.controls;
  }

  Overlapping(fromDate): boolean {
    let myArray = this.employment_getang(this.BasicinfoFrom);
    let test = myArray.filter(data => data.controls.fromto.get('employment_toDate').value >= fromDate && fromDate != null)
    if (test.length > 1) {
      return true;
    } else {
      return false;
    }
  }


  employment_Duplicate(fromDate): boolean {
    let myArray = this.employment_getang(this.BasicinfoFrom);
    let test = myArray.filter(data => data.controls.fromto.get('employment_fromDate').value == fromDate && fromDate != null)
    if (test.length > 1) {
      return true;
    } else {
      return false
    }
  }

  fromToDateValidation(employment_toDate): boolean {
    let myArray = this.employment_getang(this.BasicinfoFrom);
    let test = myArray.filter(data => data.controls.fromto.get('employment_fromDate').value > employment_toDate && employment_toDate != null)
        if (test !== null ) {
            return true;
        }
        return false;
    };

  get EmployeeArray()
    {
      return<FormArray>this.BasicinfoFrom.get('employment_details');
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

get skillsetArray()
{
return<FormArray>this.BasicinfoFrom.get('skillset_details');
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

getang(form): Array<any> {
  return form.controls.skillset_details.controls;
}

skill_Duplicate(skill): boolean {
  let myArray = this.getang(this.BasicinfoFrom);
  let test = myArray.filter(data => data.controls.skill.value == skill && skill != null)
  if (test.length > 1) {
    return true;
  } else {
    return false
  }
}

   skill_onSubmitDetail()
    {
      this.flag7=false;
      this.flag8=true;
      alert("Data is Added Successfully!...");
    }


}
