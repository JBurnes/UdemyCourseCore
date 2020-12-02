import { HttpClient, HttpHeaders } from '@angular/common/http';
import { unescapeIdentifier } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { of, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PhotoEditorComponent } from '../members/photo-editor/photo-editor.component';
import { Member } from '../_models/member';

/*
const httpOptions = {
  headers: new HttpHeaders(
    {
      Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('user')).token
    }  
  )
}
*/

@Injectable({
  providedIn: 'root'
})

export class MembersService 
{
  baseUrl= environment.apiUrl;
  memebers:Member[] =[];
  constructor(private http: HttpClient) {}
  getMembers() {
    if (this.memebers.length >0)return of (this.memebers);

    return this.http.get<Member[]>(this.baseUrl + 'users').pipe(
      map(members =>{
        this.memebers = members;
        return members;
      })
    )   
  }

  getMember(username: string) {
    const member = this.memebers.find(x => x.username === username);
    if (member !== undefined)return of(member);
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }

  updateMember(member: Member)
  {
    return this.http.put(this.baseUrl + 'users',member).pipe(

      map(()=>{
      const index =this.memebers.indexOf(member);
      this.memebers[index] = member;
    })
    )
    
  }

  setMainPhoto(photoId: number) {
    return this.http.put(this.baseUrl + 'users/set-main-photo/' + photoId, {});
  }


  
}
