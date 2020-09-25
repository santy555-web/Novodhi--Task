import { Component, OnInit } from '@angular/core';
import { Employee } from '../table-index/employee';

@Component({
  selector: 'app-table-index',
  templateUrl: './table-index.component.html',
  styleUrls: ['./table-index.component.css']
})
export class TableIndexComponent implements OnInit {
  id;
  gmail;
  name;
  gender;
  flag : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  arrEmployee: Employee[]=
  [
    new Employee(1,'john','male','john33@gmail.com'),
    new Employee(2,'Rajiv','male','rajiv.giva5@gmail.com'),
    new Employee(3,'sakshi','female','saksh773@gmail.com'),
    new Employee(4,'rajani','male','rajani21@gmail.com'),
  ];

  onclick()
  {
    this.flag= !this.flag;
  }

  onclickbutton()
  {

  }
}
