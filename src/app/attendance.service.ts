import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Attendance } from "./attendance";



@Injectable({
    providedIn:'root'
})
export class AttendanceService{
    private baseUrl=environment.baseUrl;
    constructor(private http:HttpClient){}

    getText():Observable<Attendance[]>{
        return this.http.get<Attendance[]>(this.baseUrl+"/report");
    }
}