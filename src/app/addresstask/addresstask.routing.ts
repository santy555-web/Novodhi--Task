import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddresstaskComponent } from "./addresstask.component";

const arr : Routes= [
  {path :'',component:AddresstaskComponent },

  ];

export const addressRouting = RouterModule.forChild(arr);
