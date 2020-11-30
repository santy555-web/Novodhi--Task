import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from "./Task";
import { UseraddService } from './useradd.service';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Product[]> {

  constructor(private _userData:UseraddService) { }

  resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot):
      Observable<Product[]> |null {
      return this._userData.getAllProduct().pipe(
        map((x:Product[])=>{
          console.log("from resolver",x);
        return x;
      })
      );
    }



}
