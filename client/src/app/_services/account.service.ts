import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_modules/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  
baseUrl = "https://localhost:5001/api/"
private currentUserSource = new ReplaySubject<User>(1);
cuerrentUser$ =this.currentUserSource.asObservable();


constructor(private http: HttpClient) { }

login(model:any){
  //services singlenton this dont destroy when the app is dawn.
  return this.http.post(this.baseUrl + 'account/login',model).pipe(
    map((response:User) => {
      const user =response;
      if(user){
        localStorage.setItem('user',JSON.stringify(user));
        this.currentUserSource.next(user);

      }
    })
  );
}
serCurrentUser(user:User){
  this.currentUserSource.next(user);
}
logout(){
  localStorage.removeItem('user');
  this.currentUserSource.next(null);
}
}
