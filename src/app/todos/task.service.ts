import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { items } from '../switchcase/items';
import { Todo } from './Todo';
import { stringify } from 'querystring';
import { Product } from './Product';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url:string= "http://localhost:3000/tasks/"
  url1:string= "http://localhost:3000/product/"
  url2:string= "http://localhost:3000/user/"
  constructor(private data:HttpClient) {}

    getAllTask() {
    return this.data.get(this.url);
    }
    getTaskById(id) {
      let head = new HttpHeaders().set('Content-type','application/json');
      //let body=JSON.stringify(items);
      return this.data.get(this.url + id,{headers:head});
    }

    addTask(items:Todo) {
      let head = new HttpHeaders().set('Content-type','application/json');
      let body=JSON.stringify(items);
      return this.data.post(this.url, body, {headers:head}  );
    }

    deleteTask(id)
    {
      let head = new HttpHeaders().set('Content-type','application/json');
      return this.data.delete(this.url + id, {headers:head} );
    }

    editTask(items:Todo){
      let head = new HttpHeaders().set('Content-type','application/json');
      let body =JSON.stringify(items);
      return this.data.put(this.url + items.Id,body, {headers:head} );

    }



    getAllProduct() {
      return this.data.get(this.url1);
      }

    getProductById(id) {
      let head = new HttpHeaders().set('Content-type','application/json');
        //let body=JSON.stringify(items);
        return this.data.get(this.url1 + id,{headers:head});
      }

      addProduct(items:Product) {
        let head = new HttpHeaders().set('Content-type','application/json');
        let body=JSON.stringify(items);
        return this.data.post(this.url1, body, {headers:head}  );
      }

      deleteProduct(id)
      {
        let head = new HttpHeaders().set('Content-type','application/json');
        return this.data.delete(this.url1 + id, {headers:head} );
      }

      editProduct(items:Product){
        let head = new HttpHeaders().set('Content-type','application/json');
        let body =JSON.stringify(items);
        return this.data.put(this.url1 + items.pro_id,body, {headers:head} );
      }



      getAllEmployee() {
        return this.data.get(this.url2);
        }

      getEmployeeById(id) {
        let head = new HttpHeaders().set('Content-type','application/json');
          //let body=JSON.stringify(items);
          return this.data.get(this.url2 + id,{headers:head});
        }

        addEmployee(items:Employee) {
          let head = new HttpHeaders().set('Content-type','application/json');
          let body=JSON.stringify(items);
          return this.data.post(this.url2, body, {headers:head}  );
        }

        deleteEmployee(id)
        {
          let head = new HttpHeaders().set('Content-type','application/json');
          return this.data.delete(this.url2 + id, {headers:head} );
        }

        editEmployee(items:Employee){
          let head = new HttpHeaders().set('Content-type','application/json');
          let body =JSON.stringify(items);
          return this.data.put(this.url2 + items.user_name,body, {headers:head} );

        }






}
