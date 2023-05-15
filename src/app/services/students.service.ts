import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, switchMap } from 'rxjs';
import { Students } from '../models/students.model';
import { Attendence } from '../models/attendence.model';
import { FeeDetails } from '../models/feeDetails.model';

const baseUrl = 'https://schoolapp-y6um.onrender.com/api';
const baseUrl2 = 'https://schoolapp-y6um.onrender.com/api/attendence';
const baseUr3 = 'https://schoolapp-y6um.onrender.com/api/fee'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
constructor(private http: HttpClient) { }

getAll(): Observable<Students[]> {
  return this.http.get<Students[]>(baseUrl);
}

get(id: any): Observable<Students> {
  return this.http.get<Students>(`${baseUrl}/${id}`);
}

getRollNumbers():Observable<Students []>{
  return this.http.get<Students[]>(`${baseUrl}/rollnumbers/list`)
}
getAllClasses():Observable<Students []>{
  return this.http.get<Students[]>(`${baseUrl}/classes/list`)
}
getAllClassesSection():Observable<Students []>{
  return this.http.get<Students[]>(`${baseUrl}/classes/section`)
}

create(data: any): Observable<any> {
  return this.http.post(baseUrl, data);
}

update(id: any, data: any): Observable<any> {
  return this.http.put(`${baseUrl}/${id}`, data);
}

delete(id: any): Observable<any> {
  return this.http.delete(`${baseUrl}/${id}`);
}

deleteAll(): Observable<any> {
  return this.http.delete(baseUrl);
}

 findByTitle(classname:any,admissionnumber:any): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}?classname=${classname}`).pipe(
    switchMap(data1 => {
      return this.http.get<any[]>(`${baseUrl}?admissionnumber=${admissionnumber}`);
    })
  );
  }

  getAllAttendence(): Observable<Attendence[]> {
  return this.http.get<Attendence[]>(`${baseUrl2}/list`);
}
  getAllAttendanceBasedonDate(date: any): Observable<Attendence[]> {
  return this.http.get<Attendence[]>(`${baseUrl2}/list?date=${date}`);
}

  addAttendence(data:any): Observable<Attendence[]> {
  return this.http.post<Attendence[]>(baseUrl2, data);
}
getFeeList():Observable<FeeDetails[]>{
  return this.http.get<FeeDetails[]>(`${baseUr3}/list`)
}
getFeeListSearch(date:string):Observable<FeeDetails[]>{
  return this.http.get<FeeDetails[]>(`${baseUr3}/list?date=${date}`)
}
}
