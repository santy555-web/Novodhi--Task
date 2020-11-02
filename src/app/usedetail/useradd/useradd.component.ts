import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UseraddService } from "../useradd.service";
@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent implements OnInit {
  Task_Form:FormGroup;
  status_arr: string [] =['done','pending'];
  constructor(private data:UseraddService, private router:Router) { }

  ngOnInit(): void {
    this.Task_Form= new FormGroup ({
      Id : new FormControl(null,[Validators.required]),
      Status :new FormControl(""),
      Title : new  FormControl(null,[Validators.required]),

    });
  }


  addEmp()
  {
    this.data.addTask(this.Task_Form.value).subscribe((x)=>
    {
      alert("Task Added Successfully!...");
      //this.router.navigate(['/usedetail']);

    });
  }



}
