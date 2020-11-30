import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo, Employee, Product } from './Task';


@Injectable({
  providedIn: 'root'
})
export class UseraddService {
  url:string= "http://localhost:3000/tasks/"
  url1:string= "http://localhost:3000/product/"
  url2:string= "http://localhost:3000/user/"
  constructor(private data:HttpClient) { }

    getAllTask() {
    return this.data.get<Todo[]>(this.url);
    }
    getTaskById(id) {
      return this.data.get(this.url+id);
    }

    addTask(items:Todo) {

      let body=JSON.stringify(items);
      return this.data.post(this.url, body  );
    }

    deleteTask(id)
    {

      return this.data.delete(this.url+id );
    }

    editTask(items:Todo){

      let body =JSON.stringify(items);
      return this.data.put(this.url+items.Id,body);
    }



    getAllProduct() {
      return this.data.get(this.url1);
      }

    getProductById(id) {
        return this.data.get(this.url1+id);
      }

      addProduct(items:Product) {

        let body=JSON.stringify(items);
        return this.data.post(this.url1, body);
      }

      deleteProduct(id)
      {

        return this.data.delete(this.url1+id);
      }

      editProduct(items:Product){

        let body =JSON.stringify(items);
        return this.data.put(this.url1+items.pro_id,body);
      }



      getAllEmployee() {
        return this.data.get(this.url2);
        }

      getEmployeeById(id) {
          return this.data.get(this.url2+id);
        }

        addEmployee(items:Employee) {

          let body=JSON.stringify(items);
          return this.data.post(this.url2, body);
        }

        deleteEmployee(id)
        {

          return this.data.delete(this.url2+id);
        }

        editEmployee(items:Employee){

          let body =JSON.stringify(items);
          return this.data.put(this.url2+items.user_name,body);

        }













}
