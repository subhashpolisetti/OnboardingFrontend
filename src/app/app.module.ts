import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

import { LogoutComponent } from './logout/logout.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './attendance/attendance.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    LoginComponent,
    LogoutComponent,
    EmployeeComponent,
    HomeComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,MatGridListModule,
    MatButtonModule,
    FormsModule,HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,MatSidenavModule,MatToolbarModule,MatListModule,
    MatDividerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
