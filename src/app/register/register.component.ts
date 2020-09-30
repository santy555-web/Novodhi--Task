import { Component, Input, OnInit } from '@angular/core';
import { register } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() Register: register []=[];
  today: number = Date.now();
  firstname;
  surname;
  mobile;
  email;
  pass;
  cpass;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f){
    this.Register.push(new register(f.firstname, f.surname, f.mobile, f.email, f.pass, f.cpass));
    alert("Registration successful!....");

  }



}
