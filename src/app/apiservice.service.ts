import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
const basecustomerUrl = "http://localhost:8080/customer"
const createcustomerUrl = "http://localhost:8080/customer/add"
const delcustomerUrl = "http://localhost:8080/customer/del"
const putcustomerUrl = "http://localhost:8080/customer/put"
const baseproductUrl = "http://localhost:8080/products"
const createproductUrl = "http://localhost:8080/products/add"
const delproductUrl = "http://localhost:8080/products/del"
const putproductUrl = "http://localhost:8080/products/put"
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 
  constructor(private _http:HttpClient) { }
//get all 
getAllcustomer():Observable<any>{
  const url = "http://localhost:8080/allcustomer"
  return this._http.get<any>(url)
}
getAllproduct():Observable<any>{
  const url = "http://localhost:8080/allproduct"
  return this._http.get<any>(url)
}
 // create
 createcustomer(customer: any):Observable<any>{
  console.log(customer,'createapi=>');
  return this._http.post(createcustomerUrl, customer)
}
createproduct(product: any):Observable<any>{
  console.log(product,'createapi=>');
  return this._http.post(createproductUrl, product)
}


//deleting 

deletecustomer(id: any): Observable<any> {
  return this._http.delete(`${delcustomerUrl}/${id}`);
}
deleteproduct(id: any): Observable<any> {
  return this._http.delete(`${delproductUrl}/${id}`);
}

//update 
updatecustomer(id: any, customer: any): Observable<any> {
  return this._http.put(`${putcustomerUrl}/${id}`, customer);

}
updateproduct(id: any, customer: any): Observable<any> {
  return this._http.put(`${putproductUrl}/${id}`, customer);

}

//get one 
getOnecustomer(id:any):Observable<any>{
  return this._http.get(`${basecustomerUrl}/${id}`);
}
getOneproduct(id:any):Observable<any>{
  return this._http.get(`${baseproductUrl}/${id}`);
}
}