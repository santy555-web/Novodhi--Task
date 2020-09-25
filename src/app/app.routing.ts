import { Routes, RouterModule } from "@angular/router";
import { BindingexampleComponent } from "./bindingexample/bindingexample.component";

import { DemoComponent } from "./demo/demo.component";
import { DragdropComponent } from "./dragdrop/dragdrop.component";
import { DragdropboxComponent } from "./dragdropbox/dragdropbox.component";
import { LoginComponent } from "./login/login.component";
import { ParentComponent } from "./parent/parent.component";
import { RegisterComponent } from "./register/register.component";
import { SwitchcaseComponent } from "./switchcase/switchcase.component";
import { TableIndexComponent } from "./table-index/table-index.component";
import { TodosComponent } from "./todos/todos.component";
import { TomoComponent } from "./tomo/tomo.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { HeaderComponent } from './header/header.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { AddtocartComponent } from "./addtocart/addtocart.component";
import { Component } from '@angular/core';
const arr : Routes=[

{path:'indexpage', component: IndexpageComponent },
{path:'bindingexample', component : BindingexampleComponent},
{path: 'addtocart',component: AddtocartComponent},
{path:'demo',component: DemoComponent },
{path:'dragdrop',component:DragdropComponent },
{path:'dragdropbox',component: DragdropboxComponent },
{path:'',component:LoginComponent },
{path:'parent',component:ParentComponent },
{path:'register',component:RegisterComponent },
{path:'switchcase',component: SwitchcaseComponent},
{path:'table-index',component:TableIndexComponent },
{path:'todos',component:TodosComponent },
{path:'tomo',component: TomoComponent},
{path :'pagenotfound',component: PagenotfoundComponent},
{path:'**',redirectTo: 'pagenotfound' },

];
export const arrRouting = RouterModule.forRoot(arr);
