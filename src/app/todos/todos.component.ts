import { Component, OnInit } from '@angular/core';
import { from, Subscriber } from 'rxjs';
import { Todo } from './Todo'
import { Employee } from './employee'
import { TaskService } from './task.service';
import { Product } from './Product'
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { items } from '../switchcase/items';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
Id;
Title;
Status;
signupForm: FormGroup;


pro_id;
pro_mfg;
pro_qty;
pro_img;
pro_desc;
pro_name;
pro_price;



user_email;
user_name;
user_password;
user_mobile_no;

  arrtodos: Todo[]=[];

 arremployee: Employee[]=[];

  arrproduct: Product[]=[];

  constructor(private data: TaskService) { }

  ngOnInit(): void {
    this.data.getAllTask().subscribe((data: Todo[]) => {
      this.arrtodos = data;
    });

    this.data.getAllProduct().subscribe((data: Product[]) => {
      this.arrproduct = data;
    });

    this.data.getAllEmployee().subscribe((data: Employee[]) => {
      this.arremployee = data;
    });

    this.signupForm  =  new FormGroup({

      Id: new  FormControl(),
      Status: new  FormControl(),
      Title: new  FormControl(),
    });


  }
//delete the item form task table

//  onDelete(item: Todo) {
//   if (confirm('Are you sure you want to delete?')) {
//     this.data.deleteTask(item.Id).subscribe((x: any) => {
//       if (x.affectedRows == 1) {
//         this.arrtodos.splice(this.arrtodos.indexOf(item), 1);
//       }
//     });
//   }
// }

// //Edit the item form task table
//  onEdit(item: Todo)
// {
//   if(item.Status=='done')
//   {
//     item.Status='pending';
//   }
//   else
//   {
//     item.Status='done';
//   }
//   this.data.editTask(item).subscribe((x:any) => {
//   console.log(x);
//   });
// }
// //This method for adding Task on component
//   onAdd()
//   {
//     this.data.addTask(new Todo(this.Id,this.Title,this.Status)).subscribe((x)=>{
//       console.log(x);
//       this.arrtodos.push(new Todo(this.Id,this.Title,this.Status));
//     });
//   }

onRegister()
{
     this.data.addTask(this.signupForm.value).subscribe((x)=>{
      console.log(x);
      this.arrtodos.push(new Todo(this.Id,this.Title,this.Status));
    });
}


  onDelete(item:Todo) {
      this.data.deleteTask(item.Id).subscribe((x: any) => {
          this.arrtodos.splice(this.arrtodos.indexOf(item), 1);
      });

  }

  //Edit the item form task table
   onEdit(item: Todo)
  {
    if(item.Status=='done')
    {
      item.Status='pending';
    }
    else
    {
      item.Status='done';
    }
    this.data.editTask(item).subscribe((x:any) => {
    console.log(x);
    });
  }
  //This method for adding Task on component
    // onAdd()
    // {
    //   this.data.addTask(new Todo(this.Id,this.Title,this.Status)).subscribe((x)=>{
    //     console.log(x);
    //     this.arrtodos.push(new Todo(this.Id,this.Title,this.Status));
    //   });
    // }






















//Edit the detail of employee from table
onEditEmployee(item : Employee)
 {
  item.user_email= prompt("Enter the gmail:");
  item.user_password=prompt("Enter the Password:");
  item.user_mobile_no=prompt("Enter the Mobile Number:");
  if(item.user_password==null && item.user_email==null)
    {
     item.user_email= "Null";
     item.user_password="Null";
     item.user_mobile_no="Null";
    }
  else
    {
    item.user_email;
    item.user_password;
    item.user_mobile_no;
    }
    this.data.editEmployee(item).subscribe((x:any) => {
      console.log(x);
      });
  }

//delete the item of employee from the table
onDeleteEmployee(item: Employee){
  if (confirm('Are you sure you want to delete?')) {
    this.data.deleteEmployee(item.user_name).subscribe((x: any) => {
      if (x.affectedRows == 1) {
        this.arremployee.splice(this.arremployee.indexOf(item),1);
      }
    });
  }
}

  //This method for adding employee details on component
onAddEmployee()
  {
    this.arremployee.push();

    this.data.addEmployee(new Employee(this.user_email,this.user_name,this.user_password,this.user_mobile_no)).subscribe((x)=>{
      console.log(x);
      this.arremployee.push(new Employee(this.user_email,this.user_name,this.user_password,this.user_mobile_no));
    });

  }






//This method for adding Product details on component
 onAddProduct()
 {
  this.data.addProduct(new Product(this.pro_id,this.pro_name,this.pro_desc,this.pro_mfg,this.pro_qty,this.pro_img,this.pro_price)).subscribe((x)=>{
    console.log(x);
    this.arrproduct.push(new Product(this.pro_id,this.pro_name,this.pro_desc,this.pro_mfg,this.pro_qty,this.pro_img,this.pro_price));
  });




 }

 //delete the item of Product from the table
onDeleteProduct(item: Product)
{
  if (confirm('Are you sure you want to delete?')) {
    this.data.deleteProduct(item.pro_id).subscribe((x: any) => {
      if (x.affectedRows == 1) {
        this.arrproduct.splice(this.arrproduct.indexOf(item),1);
      }
    });
  }



}

//Edit the items in Product table
onEditProduct(item : Product)
 {
      item.pro_qty = prompt("Enter the Product Quantity:");
      item.pro_desc= prompt("Enter the Product Description:");
      item.pro_mfg= prompt("Enter the Product MFG:");
      item.pro_img= prompt("Enter the Product IMG:");
      item.pro_price= prompt("Enter the Product Price:");

      if(item.pro_desc==null && item.pro_price)
        {
        item.pro_qty ="null";
        item.pro_desc ="null";
        item.pro_mfg ="null";
        item.pro_img ="null";
        item.pro_price ="null";
        }
      else
        {
        item.pro_desc;
        item.pro_price;
        item.pro_qty;
        item.pro_mfg;
        item.pro_img;
        }
        this.data.editProduct(item).subscribe((x:any) => {
            console.log(x);
        });
 }


}
