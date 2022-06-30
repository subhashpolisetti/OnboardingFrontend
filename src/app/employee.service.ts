import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Designation } from './designation';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

    
  private baseUrl=environment.baseUrl;
  constructor(private httpClient:HttpClient) { }
  
  getDesignationList():Observable< Designation[]>{
    return this.httpClient.get< Designation[]>(this.baseUrl+"/designation");
  }
 
  saveEmployee(empobj:Object,id:number):Observable<string>{
    return this.httpClient.post<any>(`${this.baseUrl}/empupdate/${id}`,empobj)
  }

  getdetails(id:number):Observable<Employee>{

    return this.httpClient.get<Employee>(`${this.baseUrl}/employee/${id}`)

  }

}