import { Component, OnInit, ViewEncapsulation,EventEmitter, Input, Output } from '@angular/core';
import { Product,register } from "./product";
import { HttpClient } from "@angular/common/http";
import { product1 } from '../addtocart/product1';
import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
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
  name;
  color;
  warranty;
  brand;
  mrp;
  discount;
  status;
  price;
  tprice :number=0;
  images;
  selectedCategory: string = '';
  value;
  add: number =0;
  quantity: string='1';
  discription;
  ClickCounter: number=0;
  selectedFile : File= null;
//Main array where i stored the products
   prooductsarr: Product[] = [
    new Product('Apple Watch',20900, 'Gray','1 Year', 'Apple', '20900', '0%', '200', 'Available', 'Apple Watch Series-3 GPS-42 mm Space Gray Aluminium Case with Black Spot Band','./assets/images/watch.jpg'),
    new Product('Samsung Galaxy S8',49990, 'Midnight Black','1 Year', 'Samsung', '49990', '0%', '50', 'Available', 'Sumsung Galaxy S8 (4gb RAM | 64gb ROM | 3000 mAh Battery)','./assets/images/galaxy.jpg'),
    new Product('Sony MDR-XB450',2074, 'black','6 Month', 'Sony', '2190', '5%', '100', 'Available', 'Sony MDR-XB450 on-Ear Extra Bass Headphones (black)','./assets/images/headphone.jpg'),
    new Product('Apple iphone 7',39999, 'Black','1 Year', 'Apple', '45500', '12%', '100', 'Available', 'Apple iphone 8 (Camera 12Mp | 4Gb ROM | 256Gb ROM | 1AA Battery)','./assets/images/iphone.jpg'),
    new Product('Apple Macbook',195902, 'Silver','2 Year', 'Apple', '199900', '2%', '0', 'Out of Stock', 'New Apple Macbook Pro (13 inch, 8Gb RAM, 512Gb SSD, 1.4Ghz Quad-core 8th-genaration,intel I5)','./assets/images/macbook-pro.jpg'),
    new Product('Nikon D3500',39999, 'Black','1 year', 'Nikon', '53950', '26%', '25', 'Available', 'Nikon D3500 DSLR, Two Lens, 70-300mm,16 Gb 10 Sd,DSLR bag','./assets/images/nikon.jpg'),
    new Product('Bose Speaker',12960, 'Carbon','6 Month', 'Bose', '16200', '20%', '50', 'Available', 'Bose Sound Mini Bluetooth Speaker ll, Carbon ','./assets/images/speaker.jpg'),
    new Product('Parker Beta Pen',1280, 'Silver-black','No Warrenty', 'Parker', '1500', '15%', '100', 'Available', 'Parker Beta Standard Chrome Trim Ball Pen with New Systemark Refill (Silver) ','./assets/images/pen.jpg'),
    new Product('  Lenovo Mouse',729, 'black','No Warrenty', 'Parker', '1387', '47%', '200', 'Available', 'Lenovo GY50R91293 400 Wireless Mouse (Black) ','./assets/images/mouse.jpg'),
    new Product(' Hp  Laptop Bag ',1290, 'blue-black','No Warrenty', 'HP', '2356', '45%', '150', 'Available', 'HP Trendsetter W2N96PA#ACJ Trendsetter Backpack (Blue and Black) ','./assets/images/laptopbag.jpg'),

  ];

 Register: register[]=[];
  urls =[];
//It is the array where we are adding data of cart manu
  Productarr1: Product[]=[];
  //this is empty array for add data
  Productarr2: Product[]=[];
   constructor() {}
   ngOnInit(): void {}
//It is for searching method inbetween parent and child
    onMyEvent(val)
    {
    //console.log(val, 'from parent');
    this.prooductsarr = this.prooductsarr.filter((x) => x.name.startsWith(val));
    }
//it is method for add the data in cart
    onMyEventClick(prooduct)
    {
     this.Productarr1.push(new Product(prooduct.name, prooduct.price, prooduct.color, prooduct.warranty,
       prooduct.brand, prooduct.mrp, prooduct.discount, prooduct.quantity, prooduct.status, prooduct.discription,prooduct.images));
     //console.log(prooductsarr,'cart function');
     this.ClickCounter++;
     if(prooduct)
     {
       alert(this.ClickCounter +'  '+'Product is added in Cart')
     }
     if(prooduct)
     {
      this.tprice=this.tprice + prooduct.price;
      //console.log(this.tprice);
     }

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
//file uplode in array
  onFileSelected(event) {
  //console.log(event);
  if (event.target.files){

      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event:any ) =>
      {
        this.urls.push(event.target.result);
      }

  }
  }

// This Method is of product for add product
  onAddProduct()
  {
  this.prooductsarr.push(new Product(this.name, this.price, this.color, this.warranty, this.brand
    , this.mrp, this.discount, this.quantity,  this.status, this.discription, this.images ));
    alert('Product is successfully added!..')
  }

}

