import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient){}

  getCategory(){
    return this.http.get("assets/files/json_pruebas.json")
  }
}
