import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../INRERFACE/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = "http://localhost:8080/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  constructor(private http: HttpClient) { }

getAllUser(){
 return this.http.get(this.apiURL+"/user")
}
getByID(id: number){
  return this.http.get(this.apiURL+"/user/"+id)
 }
createUser(body: any){
  return this.http.post(this.apiURL+"/user",body, this.httpOptions)
 }
 updateUser(body: User){
  return this.http.put(this.apiURL+"/user/"+ body.id, body, this.httpOptions)
 }

 delete(id: number){
  return this.http.delete(this.apiURL+"/user/"+id)
 }
}
