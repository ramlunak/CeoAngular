import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Roles } from '../models/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor( private http:HttpClient) { }

  getRoles(){   
  // return this.http.get<Roles[]>('http://127.0.0.1:8000/api/rol');
  }

}

