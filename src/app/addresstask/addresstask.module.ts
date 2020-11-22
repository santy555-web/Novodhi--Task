import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AddresstaskComponent } from "./addresstask.component";
import { addressRouting } from "./addresstask.routing";
@NgModule({

declarations:[
  AddresstaskComponent,
],
imports : [
  CommonModule,
  ReactiveFormsModule,
  addressRouting,
],

})

export class AddressModule{}
