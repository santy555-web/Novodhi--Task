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
import { RegisterformComponent } from './registerform/registerform.component';
import { LoginreactiveapprochComponent } from './loginreactiveapproch/loginreactiveapproch.component';
import { AnimationComponent } from './animation/animation.component';
import { LoginpagereactiveComponent } from './loginpagereactive/loginpagereactive.component';
import { RegisterRectiveComponent } from './register-rective/register-rective.component';
import { FormTaskComponent } from './form-task/form-task.component';
import { AddresstaskComponent } from './addresstask/addresstask.component';
import { PersonaldetailComponent } from './personaldetail/personaldetail.component';
import { BankdetailComponent } from './bankdetail/bankdetail.component';
import { QualificationComponent } from './qualification/qualification.component';
import { EmploymentComponent } from './employment/employment.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { AlphabetsDirective } from './alphabets.directive';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { AadharcardDirective } from './aadharcard.directive';
import { VoteridDirective } from './voterid.directive';
import { QualificationdetailsComponent } from './qualificationdetails/qualificationdetails.component';
import { ReactiveFromComponent } from './reactive-from/reactive-from.component';
import { DisableControlDirective } from './disable-control.directive';
import { UsedetailComponent } from './usedetail/usedetail.component';
import { UseraddComponent } from './usedetail/useradd/useradd.component';
import { TaskaddComponent } from './usedetail/taskadd/taskadd.component';
import { ProductaddComponent } from './usedetail/productadd/productadd.component';

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
    RegisterformComponent,
    LoginreactiveapprochComponent,
    AnimationComponent,
    LoginpagereactiveComponent,
    RegisterRectiveComponent,
    FormTaskComponent,
    AddresstaskComponent,
    PersonaldetailComponent,
    BankdetailComponent,
    QualificationComponent,
    EmploymentComponent,
    SkillsetComponent,
    AlphabetsDirective,
    NumbersOnlyDirective,
    AadharcardDirective,
    VoteridDirective,
    QualificationdetailsComponent,
    ReactiveFromComponent,
    DisableControlDirective,
    UsedetailComponent,
    UseraddComponent,
    TaskaddComponent,
    ProductaddComponent,
  ],
  imports: [
    BrowserModule,
    arrRouting,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
