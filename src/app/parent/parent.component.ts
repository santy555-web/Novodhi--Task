import { Component, OnInit, ViewEncapsulation,EventEmitter, Input, Output } from '@angular/core';
import { Product } from "./product";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ParentComponent implements OnInit {
  //  selectedCategory: string = 'Special deal';
  flag : boolean = true;
  flag1 : boolean = true;
  flag2 : boolean = true;
  pname;
  pprice;
  selectedCategory: string = '';

//Main array where i stored the products
   prooductsarr: Product[] = [
    new Product('Sprite','160'),
    new Product('Dairymilk', '100'),
    new Product('Dairymilk', '300'),
    new Product('Surf Excel', '99'),
    new Product('Lays', '10'),
    new Product('Bingo', '33'),
    new Product('Sunflower oil', '120'),
    new Product('Ketchup', '100'),
    ];

//It is the array where we are adding data of cart manu
  Productarr1: Product[]=[];

   constructor() {}
   ngOnInit(): void {}
//It is for searching method inbetween parent and child
    onMyEvent(val)
    {
    //console.log(val, 'from parent');
    this.prooductsarr = this.prooductsarr.filter((x) => x.pname.startsWith(val));
    }
//it is method for add the data in cart
    onMyEventClick(prooductsarr)
    {
     this.Productarr1.push(new Product(prooductsarr.pname, prooductsarr.pprice));
     //console.log(prooductsarr,'cart function');
    }




//this method is for first button for product manu
  onclick()
  {
    this.flag= !this.flag;
  }
//this method is for second button for cart manu
  onclick1()
  {
    this.flag1= !this.flag1;
  }
//this method is for third button for refresh
  onclick2()
  {
    this.flag2= !this.flag2;
  }
// This Method is of product for add product
  onAddclick()
  {
    this.prooductsarr.push(new Product(this.pname,this.pprice));
  }
// this method is for button of first product cancel
  onCancelClick()
  {
    this.flag=true;
  }

// this method is for button of second cart cancel
  onCancelClick1()
  {
    this.flag1=true;
  }

// this is cancel button for product add
  onCancelClick2()
  {
    this.flag2=true;
  }

}
