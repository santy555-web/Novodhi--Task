import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms"
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { TrialComponent } from './trial/trial.component';
import { ShowdataComponent } from './animation/showdata/showdata.component';
import { CommonModule } from '@angular/common';
import { HttpinterceptorstokanService } from './httpinterceptorstokan.service';
import { AngularmaterialdemoComponent } from './angularmaterialdemo/angularmaterialdemo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';

import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';

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
    TrialComponent,
    ShowdataComponent,
    AngularmaterialdemoComponent,

  ],
  imports: [
    BrowserModule,
    arrRouting,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpinterceptorstokanService,
      multi:true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
