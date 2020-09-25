import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Todo } from './Todo'
import { Employee } from './employee'
import { Product } from './Product'
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
id;
title;
status;
pid;
pstatus;
pname;
pprice;
eid;
ename;
eage;
estatus;

  arrtodos: Todo[]=[
    new Todo (1, 'Email to manager ','pending'),
    new Todo (2,'Solve todays task','done'),
  ];

 arremployee: Employee[]=[
 new Employee(1, 'Sushil Singh','28','manager'),
 new Employee(2, 'Santosh Lokare', '22','software developer'),
 //new Employee(3, 'Sanjiv Reddy', '25', 'software developer'),
  ];

  arrproduct: Product[]=[
    new Product(1, 'Mobile','new','20000'),
    new Product(2, 'Camera', '1 year old','35000'),
   // new Product(3, 'Laptop', 'new',35000),
     ];

  constructor() { }

  ngOnInit(): void {
  }
//delete the item form task table
 onDelete (item: Todo)
 {
   this.arrtodos.splice(this.arrtodos.indexOf(item),1);
 }
//Edit the item form task table
 onEdit(item: Todo)
{
  if(item.status=='done')
  {
    item.status='pending';
  }
  else
  {
    item.status='done';
  }
}
//This method for adding Task on component
  onAdd()
  {
    this.arrtodos.push(new Todo(this.id,this.title,this.status));
  }



//Edit the status form employee table
onEditEmployeeStatus(item: Employee)
{
  if(item.estatus=='manager')
  {
    item.estatus='software developer';
  }
  else
  {
    item.estatus='manager';
  }
}
//Edit the Age of employee from table
onEditEmployeeAge(item : Employee)
 {
  item.eage= prompt("Enter the employee age:");
  if(item.eage==null )
    {
     item.eage= "0";
    }
  else
    {
    item.eage;
    }
  }

//delete the item of employee from the table
onDeleteEmployee(item: Employee)
 {
   this.arremployee.splice(this.arremployee.indexOf(item),1);
 }

  //This method for adding employee details on component
onAddEmployee()
  {
    this.arremployee.push(new Employee(this.eid,this.ename,this.eage,this.estatus));
  }



//This method for adding Product details on component
 onAddProduct()
 {
   this.arrproduct.push(new Product(this.pid,this.pname,this.pstatus,this.pprice));
 }

 //delete the item of Product from the table
onDeleteProduct(item: Product)
{
  this.arrproduct.splice(this.arrproduct.indexOf(item),1);
}

//Edit the items in Product table
onEditProduct(item : Product)
 {
  item.pstatus= prompt("Enter the Product Status:");
  item.pprice= prompt("Enter the Product Price:");

  if(item.pstatus==null && item.pprice)
    {
     item.pstatus= "Null";
     item.pprice="null";
    }
  else
    {
    item.pstatus;
    item.pprice
    }

  }


}
