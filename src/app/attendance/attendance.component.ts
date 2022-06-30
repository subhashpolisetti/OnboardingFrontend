import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
//   s:string;
// }


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  
  attends:Attendance[];
  public displayedColumns = ['sNo', 'employeeId', 'employeeName'];

  public dataSource = new MatTableDataSource<Attendance>();


  constructor(private attendanceService:AttendanceService,private router:Router) {}

  ngOnInit(): void {
     this.onPageLoad();
     
  }
  onPageLoad(){
  this.attendanceService.getText().subscribe(res=>{
    this.dataSource.data=res;
    this.attends=res;
    console.log(res);
    })
  }
  toNavigate(){
    this.router.navigate(['/employeedetails'])
  }
  toReload(){
    window.location.reload();
  }
}
