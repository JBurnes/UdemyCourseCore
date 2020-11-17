import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
  registerMode = false;
  users: any;

  constructor(private http:HttpClient) { 
    this.registerMode = false;
    
  }

  ngOnInit(): void {
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
      this.registerMode = event;
  }
  getUsers(){
    this.http.get('http://localhost:5001/api/users').subscribe(users => this.users = users);
  }
  
}
