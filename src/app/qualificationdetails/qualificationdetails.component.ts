import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { QualificationComponent } from '../qualification/qualification.component';
@Component({
  selector: 'app-qualificationdetails',
  templateUrl: './qualificationdetails.component.html',
  styleUrls: ['./qualificationdetails.component.css']
})
export class QualificationdetailsComponent implements OnInit {

//   arrRegister: any []=[];
//   angForm:FormGroup;
//   signupForm: FormGroup;
 constructor(private fb:FormBuilder ) { }

   ngOnInit(): void
     {
//       this.angForm = this.fb.group({

//       qualification: new FormControl(null,[Validators.required]),
//       institute:new FormControl (null,[Validators.required]),
//       passing_year: new FormControl (null,[Validators.required]),
//       score: new FormControl (null,[Validators.required]),
//       qualification_area: new FormControl (null,[Validators.required]),
//       user_hobbies:new FormArray([]),
//     });
//     this.angForm.valueChanges.subscribe(value => {});
     }


// // createangArray() {
// //   return this.fb.group({
// //     qualification: new FormControl(null,[Validators.required]),
// //     institute:new FormControl (null,[Validators.required]),
// //     passing_year: new FormControl (null,[Validators.required]),
// //     score: new FormControl (null,[Validators.required]),
// //     qualification_area: new FormControl (null,[Validators.required]),
// //   });
// // }



// getang(form): Array<any> {
//   return form.controls.angForm.controls;
// }

// getControl()
// {
//     return (<FormArray> this.angForm.get('user_hobbies')).controls;
// }


// addang()
// {
//   if(this.angForm.value.length<3)
//     {
//       const control = new FormControl(null);
//       (this.angForm.get('user_hobbies')as FormArray).push(control);
//     }
//   else
//     {
//       alert("Max 3 Hobbies are allowed!...");
//     }
// }




// Duplicate(qualification, p): boolean {
//   let myArray = this.getang(this.angForm);

//   let test = myArray.filter(data => data.controls.qualification.value == qualification && qualification != null)

//   if (test.length > 1) {
//     return true;
//   } else {
//     return false
//   }
// }



// angsubmit() {
//   console.log(this.angForm.value)
// }




}
