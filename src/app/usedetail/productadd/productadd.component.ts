import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UseraddService } from "../useradd.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {
  ProductForm:FormGroup;
  constructor(private data:UseraddService, private router:Router) { }

  ngOnInit(): void {
    this.ProductForm= new FormGroup ({
      pro_id : new FormControl(null,[Validators.required]),
      pro_name :new FormControl(null,[Validators.required]),
      pro_price : new  FormControl(null,[Validators.required]),
      pro_desc : new  FormControl(null,[Validators.required]),
      pro_qty : new  FormControl(null,[Validators.required]),
      pro_mfg : new  FormControl(null,[Validators.required]),
      pro_img : new  FormControl(null,[Validators.required]),
    });
  }

  addProduct()
  {
    this.data.addProduct(this.ProductForm.value).subscribe((x)=>
    {
      alert("Product Added Successfully!...");
      //this.router.navigate(['/usedetail']);

    });
  }

}
