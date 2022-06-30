import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';
import { EmployeeLogin } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl="http://localhost:8080/api";
  constructor(private httpClient:HttpClient) { }
  createEmployee(loginobj:Object):Observable<string>{
    return this.httpClient.post(this.baseUrl+"/emplogin",loginobj,{responseType:'text'})
  }}
 


