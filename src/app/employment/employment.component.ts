import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup,FormArray, MinLengthValidator, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Employee } from "./Employee";
@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {
  arremployee: Employee[]=[];
  fromDate;
  toDate;
  company;
  designation;
  relevant;
  nrelevant;
  duration;
  flag2:boolean = false;
  signupForm: FormGroup;
  constructor(private ang:FormBuilder ) { }

  ngOnInit(): void
  {
    this.signupForm =  this.ang.group({

      employment_details: this.ang.array([this.employment_Group()]),
    });

  }


//this is for group of array in oninit method
employment_Group()
{
    return this.ang.group
    ({
      fromto: new FormGroup({
        fromDate: new  FormControl( null, [Validators.required ]),
        toDate: new  FormControl( null, [Validators.required ]),
      },  [this.fromToDate('fromDate', 'toDate').bind(this)]
      ),
      company: new  FormControl(null, [Validators.required]),
      designation: new  FormControl(null, [Validators.required]),
      relevant: new  FormControl(null, [Validators.required]),
      nrelevant: new  FormControl(null, [Validators.required]),
    });

}

  // fromToDate(fromDateField: string, toDateField: string, errorName: string = 'Date is not valid'): ValidatorFn {
  //     return (formGroup: AbstractControl): { [key: string]: boolean } | null => {
  //         const fromDate = formGroup.get(fromDateField).value;
  //         const toDate = formGroup.get(toDateField).value;
  //        // the fromDate and toDate are numbers. In not convert them first after null check
  //         if ((fromDate !== null && toDate !== null) && fromDate > toDate) {
  //             return {[errorName]: true};
  //         }
  //         return null;
  //     };
  //   }



  fromToDate(fromDate: string, toDate: string)
  {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[fromDate];
      let t = group.controls[toDate];
      if (f.value > t.value) {
        return {
          dates: "Date from should be less than Date to"
        };
      }
      return {};
    }
  }





 //Edit the Age of employee from table
 onEdit(item : Employee)
 {
       item.fromDate= prompt("Edit Starting Date:");
       if(item.fromDate==null )
         {
           return item.fromDate;
         }
       else
         {
         item.fromDate;
         }

       item.toDate= prompt("Edit End Date:");
     if(item.toDate==null )
       {
         return item.toDate;
       }
     else
       {
       item.toDate;
       }

       item.company= prompt("Edit Componay Name:");
       if(item.company==null )
         {
           return item.company;
         }
       else
         {
         item.company;
         }


         item.designation= prompt("Edit designation:");
         if(item.designation==null )
           {
            return item.designation;
           }
         else
           {
           item.designation;
           }


  }


//Duration calculation
timeCalculation(val: Date){
  let myArray = this.getang(this.signupForm);
  //let test = myArray.filter(data => data.controls.fromto.get('fromDate').value);
 // let test1 = myArray.filter(data => data.controls.fromto.get('toDate').value);
  var fyear= new Date(val).getFullYear();
  //var tyear= new Date(val1).getFullYear();
  var today=new Date();
  var tyear=new Date(today).getFullYear();
  var a=tyear-fyear;
  console.log(a);
  //this.relevant=a;
}



//get details from employee
getang(form): Array<any> {
  return form.controls.employment_details.controls;
}

Duplicate(fromDate, toDate): boolean {
  let myArray = this.getang(this.signupForm);
  let test = myArray.filter(data => data.controls.fromto.get('toDate').value >= fromDate && fromDate != null)
  if (test.length > 1) {
    return true;
  } else {
    return false
  }
}


Duplicate1(fromDate): boolean {
  let myArray = this.getang(this.signupForm);
  let test = myArray.filter(data => data.controls.fromto.get('fromDate').value == fromDate && fromDate != null)
  if (test.length > 1) {
    return true;
  } else {
    return false
  }
}





fromToDateValidation(fromDate, toDate): boolean {
  let myArray = this.getang(this.signupForm);
  let test = myArray.filter(data => data.controls.fromto.get('fromDate').value > toDate && toDate != null)
     // the fromDate and toDate are numbers. In not convert them first after null check
      if (test !== null ) {
          return true;
      }
      return false;
  };






//start here
onAddDetail(): void {
  //this.arremployee.push(this.signupForm.value);
  this.arremployee.push(this.signupForm.get('employment_details').value);
 // console.log(this.arremployee);
 // console.log(this.signupForm.get('employment_details').value);
  for (let entry of this.arremployee) {
    console.log('Employment Details', entry);}
  }

get EmployeeArray()
{
return<FormArray>this.signupForm.get('employment_details');
}

addemployment()
{
this.EmployeeArray.push(this.employment_Group());
}

deleteemployment(index)
{
this.EmployeeArray.removeAt(index);
}

myReset(index)
{
this.EmployeeArray.reset(index);
}

 //end data













  //This method for adding Qualification details on component
  // onAddDetail()
  // {
  //   this.arremployee.push(this.signupForm.value);
  //   console.log(this.arremployee);
  // }



   onSaveDetail(control: AbstractControl)
    {
      if (this.arremployee.indexOf(control.value) >= 0)
       {
         alert("Data is not Added...") ;
       }
       alert("Data is Added Successfully!...");
     }


  //   onClickFlag2()
  //   {
  //     this.flag2=true;
  //   }

  //   onCancleFlag1()
  //   {
  //     this.flag2=false;
  //   }

    OnClickAdd()
    {
     if( this.arremployee.length ==0)
     {
       return true;
     }
    }


}
