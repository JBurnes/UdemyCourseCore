import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl:'./nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  
  model:any = {}
  users:any;
   
  constructor(private http: HttpClient,
     public accountService: AccountService,
     private router: Router ,
    private toastr:ToastrService) { }

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
      this.router.navigateByUrl('/members');
      console.log(response);
    })    
  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }
  
}
