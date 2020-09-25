import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
no:number=10;
str:string ='santosh lokare';
a:number=20;
b:number=30;
add:number=0;
sub: number=0;
mul: number=0;
div: number=0;

//arrname:string[]=['santosh', 'Lokare'];
//arrnumber : number[]= [1,2,4,5,6];
flag: boolean= false;
  constructor() { }

ngOnInit(): void {}

 /*onclickthis()
 {
 alert("Hello santosh lokare,Welcome to novodhi solution!");
 }
*/
onaddclick()
{
  this.add=this.a + this.b;
}

onsubclick()
{
  this.sub=this.a - this.b;
}

onmulticlick()
{
  this.mul=this.a * this.b;
}

ondivideclick()
{
  this.div=this.a / this.b;
}

/*onmodulusclick(){

  this.sum=this.a % this.b;
}
*/
}
