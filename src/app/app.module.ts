import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms"
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoComponent } from './demo/demo.component';
import { TodosComponent } from './todos/todos.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { DragdropboxComponent } from './dragdropbox/dragdropbox.component';
import { TomoComponent } from './tomo/tomo.component';
import { TableIndexComponent } from './table-index/table-index.component';
import { HighlighterDirective } from './highlighter.directive';
import { CreditcardDirective } from './creditcard.directive';
import { BindingexampleComponent } from './bindingexample/bindingexample.component';
import { SwitchcaseComponent } from './switchcase/switchcase.component';
import { childComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { TermsandpolicyComponent } from './termsandpolicy/termsandpolicy.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';

import { arrRouting } from "./app.routing";
import { LoginformComponent } from './loginform/loginform.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TodosComponent,
    RegisterComponent,
    LoginComponent,
    DragdropComponent,
    DragdropboxComponent,
    TomoComponent,
    TableIndexComponent,
    HighlighterDirective,
    CreditcardDirective,BindingexampleComponent,SwitchcaseComponent,childComponent, ParentComponent,HeaderComponent,
    PagenotfoundComponent,
    IndexpageComponent,
    TermsandpolicyComponent,
    AddtocartComponent,
    LoginReactiveComponent,
    LoginformComponent,
  ],
  imports: [
    BrowserModule,
    arrRouting,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
