import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasicForm} from "./form";
@Injectable({
  providedIn: 'root'
})
export class TrailService {
  url1:string= "http://localhost:3000/form/"
  constructor(private data:HttpClient) { }

  getBasicForm()
  {
    return this.data.get<any>(this.url1);
  }
  getBasicFormById(id)
  {
    return this.data.get(this.url1+id);
  }

  addBasicForm(items:BasicForm)
  {
    let head = new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(items);
    return this.data.post(this.url1, body, {headers:head}  );
  }

  deleteBasicForm(id)
  {
    let head = new HttpHeaders().set('Content-Type','application/json');
    return this.data.delete(this.url1+id, {headers:head} );
  }

  editBasicForm(items:BasicForm)
  {
    let head = new HttpHeaders().set('Content-Type','application/json');
    let body =JSON.stringify(items);
    return this.data.put(this.url1+items.basicinfo_employee_number,body, {headers:head} );
  }


}
