import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../common/IProduct';

//127.0.0.1 instead of localhost to avoid CORS errors
const baseURL = 'http://127.0.0.1:8080/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  read(id:string): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  create(data:IProduct): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  update(id:string, data:IProduct): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id:string): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

  searchByName(name:string): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${name}`);
  }
  
}