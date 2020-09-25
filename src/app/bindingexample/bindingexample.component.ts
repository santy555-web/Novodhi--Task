import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindingexample',
  templateUrl: './bindingexample.component.html',
  styleUrls: ['./bindingexample.component.css']
})
export class BindingexampleComponent implements OnInit {
  a: number;
  b: number;
  sum: number=0;
  ans: number=0;
  str: string='shajdkjas';
  str1: string;
  str2: string='santosh Lokare is here';
  price: number=1023.3218;
  today: number = Date.now();
  constructor() { }

  ngOnInit(): void {
  }
//Addition of two number using two way Binding
  onClickAdd()
  {
    this.sum=this.a + this.b;
  }

//Addition of two number template using Binding
  onClickAdd1( no1, no2 )
  {
    this.ans=parseInt(no1) + parseInt(no2);
  }

}
