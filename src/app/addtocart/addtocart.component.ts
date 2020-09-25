import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']


})
export class AddtocartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // @Input() products: any[];
  // @Output() myevent1 = new EventEmitter();

  // onMyEventClick(products) {
  //   this.myevent1.emit(products);
  // }

    // cartData = [
    //   {'name': 'Apple', 'quantity': 3, 'price': 1.10},
    //   {'name': 'Orange', 'quantity': 2, 'price': 1.99},
    //   {'name': 'Melon', 'quantity': 1, 'price': 3.22}
    // ];

    // remove = function(i) {
    // this.cartData.splice(i, 1);
    // }

    // add = function()
    // {
    //   var newItem = {
    //     name : this.name,
    //     quantity: this.quantity,
    //     price: this.price
    //   };

    //      this.cartData.push(newItem);
    // }

//cartarr : Cart [] =[];

}
