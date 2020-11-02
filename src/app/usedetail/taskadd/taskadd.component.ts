import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UseraddService } from "../useradd.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-taskadd',
  templateUrl: './taskadd.component.html',
  styleUrls: ['./taskadd.component.css']
})
export class TaskaddComponent implements OnInit {
  user_Form:FormGroup;
  constructor(private data:UseraddService, private router:Router) { }

  ngOnInit(): void {

    this.user_Form= new FormGroup ({
      user_email : new FormControl(null,[Validators.required,Validators.email]),
      user_name :new FormControl(null,[Validators.required]),
      user_password : new  FormControl(null,[Validators.required]),
      user_mobile_no : new  FormControl(null,[Validators.required]),
    });
  }


  addUser()
  {
    this.data.addEmployee(this.user_Form.value).subscribe((x)=>
    {
      alert("Task Added Successfully!...");
      //this.router.navigate(['/usedetail']);

    });
  }


}
