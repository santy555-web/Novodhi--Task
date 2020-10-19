import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup,FormArray, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { Skill } from "./skillset";
@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {
  arrset: Skill[]=[];
  constructor(private ang:FormBuilder) { }
  signupForm: FormGroup;
  flag3:boolean = false;
  ngOnInit(): void {

    this.signupForm =  this.ang.group({
      skillset_details: this.ang.array([this.skillset_Group()]),
    });
  }



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
onAddDetail(): void {
  //this.arrset.push(this.signupForm.value);
  this.arrset.push(this.signupForm.get('skillset_details').value);
  console.log('Skill Set Data',this.arrset);
  }

get skillsetArray()
{
return<FormArray>this.signupForm.get('skillset_details');
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

 Duplicate(skill): boolean {
  let myArray = this.getang(this.signupForm);
  let test = myArray.filter(data => data.controls.skill.value == skill && skill != null)
  if (test.length > 1) {
    return true;
  } else {
    return false
  }
}








//Edit the Age of employee from table
// onEdit(item : Skill)
// {
//       item.scategory= prompt("Edit Skill Category:");
//       if(item.scategory==null )
//         {
//           return item.scategory;
//         }
//       else
//         {
//         item.scategory;
//         }

//       item.skill= prompt("Edit Skill:");
//     if(item.skill==null )
//       {
//         return item.skill;
//       }
//     else
//       {
//       item.skill;
//       }

//       item.skilll= prompt("Edit Skill Level:");
//       if(item.skilll==null )
//         {
//           return item.skilll;
//         }
//       else
//         {
//         item.skilll;
//         }


//         item.iscurrent= prompt("Edit Is Current Working?:");
//         if(item.iscurrent==null )
//           {
//            return item.iscurrent;
//           }
//         else
//           {
//           item.iscurrent;
//           }

//           item.experience= prompt("Edit Experience:");
//           if(item.experience==null )
//             {
//              return item.experience;
//             }
//           else
//             {
//             item.experience;
//             }

//           item.remarks= prompt("Edit Remarks:");
//           if(item.remarks==null )
//             {
//              return item.remarks;
//             }
//           else
//             {
//             item.remarks;
//             }


//  }

//delete the item from Employee table
onDelete(item: Skill)
{
  this.arrset.splice(this.arrset.indexOf(item),1);
}

 //This method for adding skillset details on component
//  onAddDetail()
//  {
//    this.arrset.push(this.signupForm.value);
//    console.log(this.arrset);
//  }



 onSaveDetail(control: AbstractControl)
  {
     if (this.arrset.indexOf(control.value) >= 0)
     {
       alert("Data is not Added...") ;
     }
     alert("Data is Added Successfully!...");
   }



   onRegister(control: AbstractControl)
   {
      if (this.arrset.indexOf(control.value) >= 0)
      {
        alert(" Register is Successfully!...");
      }
      alert("Register Successfully!...");
    }



//this method is for button hide and if data present in array then save button will be enable
   OnClickAdd()
   {
    if( this.arrset.length ==0)
    {
      return true;
    }
   }

   onSubmitDetail(control: AbstractControl)
   {
      if (this.arrset.indexOf(control.value) >= 0)
      {
        alert("Data is not Added...") ;
      }
      alert("Data is Added Successfully!...");
    }


}
