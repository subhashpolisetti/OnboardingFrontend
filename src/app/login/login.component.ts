import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeLogin } from '../login';

import { LoginService } from '../login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginobj:EmployeeLogin=new EmployeeLogin();
  check:string;
  invalidCheck:string;


  constructor(private loginservice:LoginService,private router:Router) { }
  save(){
      this.loginservice.createEmployee(this.loginobj).subscribe(data=>
        {
          console.log(data);
          this.check=data;
          this.checkin();
         
        },
        error=>console.log(error)
        );
  }
  ngOnInit(): void {
  
  }

  
  onSubmit(){
    this.save();}
   checkin(){
    if(this.check=="success"){
      this.router.navigate(['/employeedetails'])
      //window.localStorage.setItem('user', JSON.stringify(person));

      let mynumber=this.loginobj.id;
      localStorage.setItem('mynumber',mynumber.toString());}
     

    
    
    else{
      this.invalidCheck=this.check;
    }
   }}

  

