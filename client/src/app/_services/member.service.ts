import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from '../_modules/member';

const httpOptions={
  headers: new HttpHeaders({
    Authorization :'Bearer'+JSON.parse(localStorage.getItem('user')).token
  })
}

@Injectable({
  providedIn: 'root'
})


export class MemberService {
  baseUrl =environment.apiUrl;

  constructor(private http: HttpClient) { }
  //when a observable metode is returned this is not neede on declaration class.
  //getMembers():Observable<Member[]>{

    getMembers(){
    return this.http.get<Member[]>(this.baseUrl + 'users', httpOptions);
  }
  getMember(usernam: string ){
    return this.http.get<Member>(this.baseUrl +'users/' + username, httpOptions);
  }
}
