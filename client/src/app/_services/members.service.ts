import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { unescapeIdentifier } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { of, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PhotoEditorComponent } from '../members/photo-editor/photo-editor.component';
import { Member } from '../_models/member';
import { PaginatedResult } from '../_models/pagination';

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
  paginatedResult : PaginatedResult<Member[]> = new PaginatedResult<Member[]>();

  constructor(private http: HttpClient) {}
  getMembers(page?:number , itemsPerPage?) {
      let params = new HttpParams();

    if(page!== null && itemsPerPage!==null)
    {
       params = params.append('pageNumber',page.toString());
       params = params.append('pageSize',itemsPerPage.toString());
    }
        return this.http.get<Member[]>(this.baseUrl + 'users',{observe: 'response', params}).pipe(
        map(response =>{
          this.paginatedResult.result = response.body;

          if (response.headers.get('Pagination')!== null ){
            this.paginatedResult.pagination= JSON.parse(response.headers.get('Pagination'));

          }
          return this.paginatedResult;
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

  
  deletePhoto(photoId: number) {
    return this.http.delete(this.baseUrl + 'users/delete-photo/' + photoId);
  }
}
