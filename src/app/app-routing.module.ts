import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  //{ path :'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'employeedetails',component:EmployeeDetailsComponent},
  {path:'logout',component:LogoutComponent},
  {path:'' ,component:HomeComponent},
  {path:'employeeOnboarding',component:EmployeeComponent},
  {path:'home',component:HomeComponent},
  {path:'attendance',component:AttendanceComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
