import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from "./Task";
import { UseraddService } from './useradd.service';
import { map } from "rxjs/operators";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolverService implements Resolve<Employee[]>{

  constructor(private _userData:UseraddService) { }

   resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<Employee[]> |null{
    return this._userData.getAllEmployee().pipe(
      map((x:Employee[])=>{
        console.log("from resolver",x);
      return x;
    })
    );
  }

}
