import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
const ura = 'http://localhost:8081';

@Injectable({
  providedIn: 'root'
})
export class EdServiceService {

  constructor(private http:HttpClient) { }

  getAllQuest() {
    const uri = ura + '/getallquest.htm';
    return this.http.get(uri).pipe(map(res =>{
      return res;
    }))
  }

  getAllUsers() {
    const uri = ura + '/getallusers.htm';
    return this.http.get(uri).pipe(map(res =>{
      return res;
    }))
  }
}
