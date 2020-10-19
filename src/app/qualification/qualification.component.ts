import { Component, OnInit } from '@angular/core';
import { Qualification } from "./qualifi";
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
  arrquali: Qualification[]=[];
  invalidNamesArr: any[] = [];
  qualification;
  institute;
  passing_year;
  score;
  onChange;
  qualification_area;
  signupForm: FormGroup;
  flag:boolean = true;
  res;
  constructor( private ang:FormBuilder ) { }

  ngOnInit(): void {
    this.signupForm =  this.ang.group
    ({
      qualification_details: this.ang.array([this.qualification_Group()]),
    });
    this.signupForm.controls['qualification_details'].valueChanges.subscribe(value => {});
  }


//this is for group of array in oninit method
  qualification_Group()
  {
      return this.ang.group
      ({
        qualification: new FormControl(null,[Validators.required]),
        institute:new FormControl (null,[Validators.required]),
        passing_year: new FormControl (null,[Validators.required]),
        score: new FormControl (null,[Validators.required]),
        qualification_area: new FormControl (null,[Validators.required]),

      });
     // this.signupForm.get('qualification').valueChanges.subscribe((x)=>this.nameInvalid(x));
    // this.signupForm.controls['qualification'].valueChanges.subscribe(value => {
   // });

  }
//for show and hide button
  onclickFlag(){
    this.flag= !this.flag;
  }

//start here
onAddDetail(): void
      {
        this.arrquali.push(this.signupForm.value);
        console.log('Qualification Details',this.arrquali);
        // console.log('Qualification Details',this.signupForm.get('qualification_details').controls['qualification'].value);
      }

  get qualiArray()
  {
    return<FormArray>this.signupForm.get('qualification_details');
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
  myReset()
  {
  this.qualiArray.reset();
  }

//end  here

addang() {
  const control = <FormArray>this.signupForm.get('qualification_details');
  control.push(this.qualification_Group());
}


//get details from Qualifications
getang(form): Array<any> {
  return form.controls.qualification_details.controls;
}

Duplicate(quali): boolean {
  let myArray = this.getang(this.signupForm);
  let test = myArray.filter(data => data.controls.qualification.value == quali && quali != null)
  if (test.length > 1) {
    return true;
  } else {
    return false
  }
}

//this method is for name validatin which is predefined
// invalidUserNameValidation(control: AbstractControl):
// { [key: string]: boolean }
// {
//    if (this.invalidNamesArr.indexOf(control.value) >= 0)
//    {
//    return { invalidName: true };
//    }
//    return null;
//  }



 onEdit(qualification)
{

   this.qualification= prompt("Edit Qualification:");
      if(this.qualification==null )
        {
            this.signupForm.value.setValue(qualification);
        }
      else
        {
         return null;
        }
}



// onEdit(item : Qualification)
// {
//       item.qualification= prompt("Edit Qualification:");
//       if(item.qualification==null )
//         {
//           return item.qualification;
//         }
//       else
//         {
//         item.qualification;
//         }

//       item.institute= prompt("Edit institute:");
//     if(item.institute==null )
//       {
//         return item.institute;
//       }
//     else
//       {
//       item.institute;
//       }

//       item.passing_year= prompt("Edit Passing year:");
//       if(item.passing_year==null )
//         {
//           return item.passing_year;
//         }
//       else
//         {
//         item.passing_year;
//         }


//         item.score= prompt("Edit Score:");
//         if(item.score==null )
//           {
//            return item.score;
//           }
//         else
//           {
//           item.score;
//           }

//           item.qualification_area= prompt("Edit Qualification area:");
//           if(item.qualification_area==null )
//             {
//               return item.qualification_area;
//             }
//           else
//             {
//             item.qualification_area;
//             }
//  }









// invalidUserNameValidation():ValidatorFn { return (control: AbstractControl): { [key: string]: any } |null =>
// {

//   if (this.signupForm)
//   {
//     let inavalid_name = this.qualification_details.controls;
//     for(const control in inavalid_name)
//     {
//     let fg =inavalid_name[control] as FormGroup;
//       if(!fg.valid){
//         return { 'invalid name': {value: 'inavalid name'} };
//       }
//     }
//   }
//   return null;
// }

// }


//this is for save button
 onSaveDetail(control: AbstractControl)
  {
     if (this.arrquali.length == 0)
     {
       alert("Data is not Added...") ;
     }
     alert("Data Added Successfully!...");
   }


  //this for hinding next button
   OnClickAdd()
   {
    if( this.arrquali.length ==0)
    {
      return true;
    }
   }



}
