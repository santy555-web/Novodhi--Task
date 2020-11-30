import { Routes, RouterModule } from "@angular/router";
import { BindingexampleComponent } from "./bindingexample/bindingexample.component";
import { LoginformComponent } from "./loginform/loginform.component"
import { RegisterformComponent } from "./registerform/registerform.component";
import { DemoComponent } from "./demo/demo.component";
import { DragdropComponent } from "./dragdrop/dragdrop.component";
import { DragdropboxComponent } from "./dragdropbox/dragdropbox.component";
import { QualificationdetailsComponent } from "./qualificationdetails/qualificationdetails.component";
import { LoginComponent } from "./login/login.component";
import { ParentComponent } from "./parent/parent.component";
import { UseraddComponent } from "./usedetail/useradd/useradd.component";
import { BankdetailComponent } from "./bankdetail/bankdetail.component";
import { RegisterComponent } from "./register/register.component";
import { SwitchcaseComponent } from "./switchcase/switchcase.component";
import { TableIndexComponent } from "./table-index/table-index.component";
import { TodosComponent } from "./todos/todos.component";
import { PersonaldetailComponent } from "./personaldetail/personaldetail.component";
import { UsedetailComponent } from "./usedetail/usedetail.component";
import { RegisterRectiveComponent } from "./register-rective/register-rective.component";
import { LoginreactiveapprochComponent } from "./loginreactiveapproch/loginreactiveapproch.component";
import { TomoComponent } from "./tomo/tomo.component";
import { TaskaddComponent } from "./usedetail/taskadd/taskadd.component";
import { ProductaddComponent } from "./usedetail/productadd/productadd.component";
import { QualificationComponent } from "./qualification/qualification.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { HeaderComponent } from './header/header.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { LoginpagereactiveComponent } from "./loginpagereactive/loginpagereactive.component";
import { AddtocartComponent } from "./addtocart/addtocart.component";
import { FormTaskComponent } from "./form-task/form-task.component";
import { TrialComponent } from "./trial/trial.component";
import { ShowdataComponent} from "./animation/showdata/showdata.component"
import { ReactiveFromComponent } from "./reactive-from/reactive-from.component";
import { LoginReactiveComponent } from "./login-reactive/login-reactive.component";
import { AnimationComponent } from "./animation/animation.component";
import { EmploymentComponent } from './employment/employment.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { UserguardService } from "./userguard.service";
import { UserresolverService } from "./usedetail/userresolver.service";
import { EditgaurdService } from "./editgaurd.service";
import { AngularmaterialdemoComponent } from "./angularmaterialdemo/angularmaterialdemo.component";

const arr : Routes=[

{path:'', component: IndexpageComponent },
{path:'bindingexample', component : BindingexampleComponent},
{path: 'addtocart',component: AddtocartComponent},
{path:'demo',component: DemoComponent },
{path:'dragdrop',component:DragdropComponent },
{path:'dragdropbox',component: DragdropboxComponent },
{path:'loginpage',component:LoginformComponent },
{path:'registerform',component:RegisterformComponent },
{path:'login',component:LoginComponent },
{path:'parent',component:ParentComponent },
{path:'register',component:RegisterComponent },
{path:'switchcase',component: SwitchcaseComponent},
{path:'table-index',component:TableIndexComponent },
{path:'todos',component:TodosComponent },
{path:'loginreactive',component:LoginReactiveComponent},
{path:'registerreactive',component:RegisterRectiveComponent},
{path:'tomo',component: TomoComponent},
{path:'taskadd',component: TaskaddComponent},
{path:'useradd',canDeactivate:[EditgaurdService],component: UseraddComponent},
{path:'usedetail',canActivate:[UserguardService], resolve:{xyz:UserresolverService}, component: UsedetailComponent},
{path:'reactiveform',component: ReactiveFromComponent},
{path:'qualification',component: QualificationComponent},
{path:'skillset',component: SkillsetComponent},
{path:'employment',component: EmploymentComponent},
{path:'productadd',component: ProductaddComponent},
{path:'bankdetail',component: BankdetailComponent},
{path:'personaldetail',component: PersonaldetailComponent},
{path:'formtask',component: FormTaskComponent},
{path:'trail/:id',component: TrialComponent},
{path:'animation',component:AnimationComponent},
{path:'showdata',component:ShowdataComponent },
{path:'registerpage',component:LoginpagereactiveComponent},
{path:'reactive', component:LoginreactiveapprochComponent},
{path :'pagenotfound',component: PagenotfoundComponent},
{path :'qualificationdetails',component: QualificationdetailsComponent },
{path:'angularmaterail',component:AngularmaterialdemoComponent},
{
  path:'addresstask',
  canLoad:[UserguardService],
  loadChildren: () =>
  import('./addresstask/addresstask.module').then((x)=>x.AddressModule),
},

{path:'**',redirectTo: 'pagenotfound' },

];
export const arrRouting = RouterModule.forRoot(arr);
