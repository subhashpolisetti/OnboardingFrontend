
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Designation } from '../designation';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  
  designation:Designation[];
 employeeForm:FormGroup;

  

  constructor(private employeeService:EmployeeserviceService,private router:Router) { }
  ngOnInit(): void {
      this.getDesignation();
      this.employeeForm= new FormGroup({
        employeeName: new FormControl('',[Validators.required]),
        experience: new FormControl(null,[Validators.required]),
        qualification: new FormControl(null,[Validators.required]),
        salary: new FormControl(null,[Validators.required]),
        designation: new FormControl(null,[Validators.required]),
        qualificationDoc: new FormControl(null),
        sscCertificate: new FormControl(null),
        releavingLetter: new FormControl(null)
      });

      }
    
  onSubmit(){
    console.log(this.employeeForm.value)
    this.onSave();
    
    
  }
  onSave(){
    
    this.employeeService.createEmployee(this.employeeForm.value).subscribe(data=>
      {
        console.log(data);
        this.resetForm();
        this.home();
      },
      error=>console.log(error)
      );
    }
    onChange = ($event: Event) => {
      const target = $event.target as HTMLInputElement;
      const file: File = (target.files as FileList)[0];
      console.log(file);
    }

    getDesignation(){
      this.employeeService.getDesignationList().subscribe(data=>
        {
          console.log(data);
          this.designation=data;
          
        },
        error=>console.log(error) );
    }
    resetForm()
    {
      this.employeeForm.reset();
    }
    home(){
      this.router.navigate(['/'])
    }

  }
