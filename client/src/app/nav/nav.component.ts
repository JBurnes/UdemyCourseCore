import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_modules/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl:'./nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  
  model:any = {}
  users:any;
   
  constructor(private http: HttpClient, public accountService: AccountService) { }

  ngOnInit(): void {
   this.getUsers();
   this.setCurrentUser();
  }


  setCurrentUser()
{
  const user: User = JSON.parse(localStorage.getItem('user'));
  this.accountService.setCurrentUser(user);
} 
getUsers()
{
  this.http.get('https://localhost:5001/api/users').subscribe(response =>{
    this.users =response;
  })
}
 login(){
    this.accountService.login(this.model).subscribe(response =>{
      console.log(response);
    },error => {
      console.log(error);
    })    
  }
  logout(){
    this.accountService.logout();
  }
  
}
