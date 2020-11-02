export class Todo
{
  constructor ( public Id: Number, public Title: string, public Status:string)
  { }
}


export class Product{
  constructor(public pro_id: Number, public pro_mfg: string, public pro_name: string, public pro_qty: string, public pro_desc:string, public pro_img: string, public pro_price:string)
  {}
}


export class Employee{
  constructor(public user_email:string, public user_name: string, public user_password:string, public user_mobile_no:string){}

  }
