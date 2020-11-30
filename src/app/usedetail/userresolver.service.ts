import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo,Employee,Product } from "./Task";
import { UseraddService } from './useradd.service';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class UserresolverService implements Resolve<Todo[]>{

  constructor(private _userData:UseraddService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<Todo[]> {
    return this._userData.getAllTask().pipe(
      map((x:Todo[])=>{
        console.log("from resolver",x);
      return x;
    })
    );
  }



}
