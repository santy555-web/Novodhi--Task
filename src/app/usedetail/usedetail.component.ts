import { Component, OnInit } from '@angular/core';
import { Todo,Employee,Product } from './Task';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UseraddService } from "./useradd.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-usedetail',
  templateUrl: './usedetail.component.html',
  styleUrls: ['./usedetail.component.css']
})
export class UsedetailComponent implements OnInit {

 arrtodos: Todo[]=[];
 status_arr: string [] =['done','pending'];
 arremployee: Employee[]=[];
 arrproduct: Product[]=[];
 flag1 : boolean = false;
 flag2 : boolean = false;
 flag3 : boolean = false;

 user_Form:FormGroup;
 Task_Form:FormGroup;
 ProductForm:FormGroup;
  constructor(private _data:UseraddService,
    private routeract:ActivatedRoute) { }

  ngOnInit(): void {

    // this.data.getAllTask().subscribe((data)=>{
    // this.arrtodos=data;
    // });
    this.arrtodos = this.routeract.snapshot.data["xyz"];

    this._data.getAllProduct().subscribe((data: Product[]) => {
      this.arrproduct = data;
    });

    this._data.getAllEmployee().subscribe((data: Employee[]) => {
      this.arremployee = data;
    });

    this.Task_Form= new FormGroup ({
      Id : new FormControl(null,[Validators.required]),
      Status :new FormControl("",[Validators.required]),
      Title : new  FormControl(null,[Validators.required]),

    });


    this.user_Form= new FormGroup ({
      user_email : new FormControl(null,[Validators.required,Validators.email]),
      user_name :new FormControl(null,[Validators.required]),
      user_password : new  FormControl(null,[Validators.required]),
      user_mobile_no : new  FormControl(null,[Validators.required]),
    });



    this.ProductForm= new FormGroup ({
      pro_id : new FormControl(null,[Validators.required]),
      pro_name :new FormControl(null,[Validators.required]),
      pro_price : new  FormControl(null,[Validators.required]),
      pro_desc : new  FormControl(null,[Validators.required]),
      pro_qty : new  FormControl(null,[Validators.required]),
      pro_mfg : new  FormControl(null,[Validators.required]),
      pro_img : new  FormControl(null,[Validators.required]),
    });

  }






  deleteTask(item:Todo)
  {
    this._data.deleteTask(item.Id).subscribe((x:any)=>
      {
        this.arrtodos.splice(this.arrtodos.indexOf(item), 1);
      });
  }

  EditTaskPopUp()
  {
     this._data.editTask(this.Task_Form.value).subscribe((x:any) =>
     {
       alert("Task Edited Successfully!...");
     });
  }

  EditTask(item: Todo){
    this.flag1=true;
    this._data.getTaskById(item.Id).subscribe((x:Todo[]) => {
    this.Task_Form.patchValue({
      Id:x[0].Id,
      Title:x[0].Title,
      Status:x[0].Status,
    });

   });
  }

  onClear()
  {
    this.flag1=false;
  }


  // editTask(item: Todo)
  // {
  //   item.Title =prompt("Enter the Title:");
  //   item.Status = prompt("Enter the Status:");
  //   if(item.Status==null && item.Title==null)
  //   {
  //     item.Status==null;
  //     item.Title==null;
  //   }
  //   else
  //   {
  //     item.Status;
  //     item.Title;
  //   }
  //   this.data.editTask(item).subscribe((x:any) => {
  //   console.log(x);
  //   });
  // }


  deleteUser(item:Employee)
  {
    this._data.deleteEmployee(item.user_name).subscribe((x:any)=>
      {
        this.arremployee.splice(this.arremployee.indexOf(item), 1);
      }
    );
  }



  // editUser(item: Employee)
  // {
  //   item.user_email =prompt("Enter the Email:");
  //   item.user_password = prompt("Enter the password:");
  //   item.user_mobile_no = prompt("Enter the Mobile Number:");
  //   if(item.user_email==null && item.user_password==null && item.user_mobile_no==null)
  //   {
  //     item.user_email==null;
  //     item.user_password==null;
  //     item.user_mobile_no==null;
  //   }
  //   else
  //   {
  //     item.user_email;
  //     item.user_password;
  //     item.user_mobile_no;
  //   }
  //   this.data.editEmployee(item).subscribe((x:any) => {
  //   console.log(x);
  //   });
  // }


  EditUserPopUp()
  {
    this._data.editEmployee(this.user_Form.value).subscribe((x:Employee[]) => {
      alert("User Details Edited Successfully!...");
        });

  }

  editUser(item: Employee)
  {
        this.flag2=true;
        this._data.getEmployeeById(item.user_name).subscribe((x:Employee[]) => {
        this.user_Form.patchValue({
        user_email:x[0].user_email,
        user_name:x[0].user_name,
        user_password:x[0].user_password,
        user_mobile_no:x[0].user_mobile_no,
      });

   });
  }



  onClear1()
  {
    this.flag2=false;
  }



 deleteProduct(item:Product)
 {
   this._data.deleteProduct(item.pro_id).subscribe((x:any)=>
     {
       this.arrproduct.splice(this.arrproduct.indexOf(item), 1);
     }
   );
 }


  onClear2()
  {
    this.flag3=false;
  }






  EditProductPopUp()
  {
    this._data.editProduct(this.ProductForm.value).subscribe((x:any) => {
      alert("Product Details Edited Successfully!...");
        });

  }

  editProductdetail(item: Product)
  {
        this.flag3=true;
        this._data.getProductById(item.pro_id).subscribe((x:Product[]) => {
        this.ProductForm.patchValue({
        pro_id:x[0].pro_id,
        pro_name:x[0].pro_name,
        pro_qty:x[0].pro_qty,
        pro_desc:x[0].pro_desc,
        pro_img:x[0].pro_img,
        pro_mfg:x[0].pro_mfg,

        pro_price:x[0].pro_price,

      });

   });
  }



//  editProductdetail(item: Product)
//  {
//    item.pro_desc =prompt("Enter the Description:");
//    if(item.pro_desc==null )
//    {
//      item.pro_desc==null;
//    }
//    else
//    {
//      item.pro_desc;

//    }
//    this.data.editProduct(item).subscribe((x:any) => {
//    console.log(x);
//    });
//  }



}


