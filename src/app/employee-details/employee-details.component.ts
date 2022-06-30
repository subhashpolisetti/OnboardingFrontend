import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Designation } from '../designation';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employee.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeCheck } from '../employeecheck';
import { EmployeeLogin } from '../login';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
 private employee:Employee=new Employee();
 loginobj:EmployeeLogin=new EmployeeLogin();


//  emp2:EmployeeCheck=new EmployeeCheck();
emp1:Employee=new Employee();
 designation:Designation[];
editoption:boolean=true;
 timer:boolean=true;
 emp:Employee[];
  employeeForm:FormGroup;
  idedit:boolean=true;
  des:String;
  get:String;
  id1:number;



ngOnInit(): void {
  
    this.employeeForm= new FormGroup({
      employeeName: new FormControl(null,[Validators.required]),
      employeeId: new FormControl(null,[Validators.required]),
      experience: new FormControl(null,[Validators.required]),
      qualification: new FormControl(null,[Validators.required]),
      salary: new FormControl(null,[Validators.required]),
      designation: new FormControl(null,[Validators.required]),
      qualificationDoc: new FormControl(null),
      sscCertificate: new FormControl(null),
      releavingLetter: new FormControl(null)

  
    });
    this.getdetails()
    this.getlist()
   // this.getlist()
   //this.updateName()
    
  }

loginTime(){
  this.timer=true;
if(this.timer==true){
    this.startTimer();
  }
  
}


  time: number = 0;

  display:any;

  interval:any;

  startTimer() {

    console.log("=====>");

    this.interval = setInterval(() => {

      if (this.time === 0) {

        this.time++;

      } else {

        this.time++;

      }

      this.display=this.transform( this.time)

    }, 1000);

  }

  transform(value: number, args?: any):any {

    const hours: number = Math.floor(value / 60);
    const minutes: number = (value - hours * 60);

    if (hours < 10 && minutes < 10) {
        return '0' + hours + ' : 0' + (value - hours * 60);
    }
    if (hours > 10 && minutes > 10) {
        return '0' + hours + ' : ' + (value - hours * 60);
    }
    if (hours > 10 && minutes < 10) {
        return hours + ' : 0' + (value - hours * 60);
    }
    if (minutes > 10) {
        return '0' + hours + ' : ' + (value - hours * 60);
    }
  }

  pauseTimer() {

   this. time = 0;

    clearInterval(this.interval);

  }


 
  onSubmit(){
   
    this.onSave();
  }

  constructor(private employeeservice:EmployeeserviceService,private router:Router) {
   
   }
  onSave(){
    //this.employee=<Employee>this.employeeForm.value;
    let mynum=Number(localStorage.getItem('mynumber'))
    this.employeeservice.saveEmployee(this.employeeForm.value,mynum).subscribe(data=>
       {
          console.log(this.employeeForm.value);
      
        window.location.reload();
      },
      error=>console.log(error)
      );
  }

 getlist(){
   this.employeeservice.getDesignationList().subscribe(data=>
    {
      this.designation=data;
      
    },
    error=>console.log(error)

    
    );
 }

 
 getdetails(){
  let mynum=Number(localStorage.getItem('mynumber'))
  // console.log("id="+mynum)
  // console.log(typeof(mynum))
  this.employeeservice.getdetails(mynum).subscribe(data=>{
  //  console.log(data);
    this.emp1=data
    this.des=this.emp1.designation;
    console.log(this.des);
    this.employeeForm.patchValue({ employeeName:this.emp1.employeeName});
    this.employeeForm.patchValue({ employeeId:this.emp1.id});
    this.employeeForm.patchValue({ salary:this.emp1.salary});
    this.employeeForm.patchValue({ experience:this.emp1.experience});
    this.employeeForm.patchValue({ qualification:this.emp1.qualification});
    this.employeeForm.patchValue({designation:this.emp1.designation});
  })
 }
 onEdit(){
   this.editoption=false;
  
}
logout(){
  localStorage.clear();
  this.router.navigate(['logout'])
}
toNavigate(){
  this.router.navigate(['attendance'])
}


  onChange = ($event: Event) => {

    const target = $event.target as HTMLInputElement;

    const file: File = (target.files as FileList)[0];

    console.log(file);

  }
}

  


