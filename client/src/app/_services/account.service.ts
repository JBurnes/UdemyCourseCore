import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
baseUrl = "https://localhost:5001/api/"
  constructor(private http: HttpClient) { }
login(model:any){
  //services singlenton this dont destroy when the app is dawn.
  return this.http.post(this.baseUrl + 'account/login',model);
}
}
