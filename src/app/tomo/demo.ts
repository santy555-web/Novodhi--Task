/*export interface Temo
{
  id : number;
  title : string;
  status :string;
}*/

export class Todo
{
  constructor ( public id: Number, public title: string, public status:string)
  { }
}
export class Employee
{
  constructor(public eid: Number, public ename: string, public eage:string, public estatus:string){}
}


