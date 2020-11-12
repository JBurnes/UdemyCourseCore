import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav  class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div class  ="container">
          <a class="navbar-brand" href="#">Dating App b</a>


         
            <ul class="navbar-nav mr-auto">
              <li class="nav-item ">

                <a class="nav-link" href="#">Matches</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">List</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" >Messages</a>
              </li>
            </ul>
            <form class="form-inline mt-2 mt-md-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Login">
              
              <input class="form-control mr-sm-2" type="text" placeholder="Password" >


              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
            </form>
          </div>
         
        </nav>
  `,
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
