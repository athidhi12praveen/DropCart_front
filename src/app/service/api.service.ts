import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL='http://localhost:3000'

  public cartItemList : any = []

  public productList = new BehaviorSubject<any>([])

  public search = new BehaviorSubject<string>("")

  constructor(private http:HttpClient) { }

  // api call for get all products

  getAllProducts=()=>{
    return this.http.get(`${this.SERVER_URL}/products/all`)
  }

  // api call for get a single product
  viewProductApi=(id:any)=>{
    return this.http.get(`${this.SERVER_URL}/product/view/${id}`)
  }

  // register api call
  registerApi=(user:any)=>{
    return this.http.post(`${this.SERVER_URL}/register`,user)
  }

  // login api call
  loginApi=(user:any)=>{
    return this.http.post(`${this.SERVER_URL}/login`,user)
  }

  
}
