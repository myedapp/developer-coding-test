import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private usersObservable : Observable<any[]> ;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  	this.getUsers();
  }

  getUsers() {
  	this.usersObservable = this.userService.getUsers();
    console.log(this.userService.getUsers());
  }
  getUserQuests(user: any) {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.setItem("userId", user.id.toString());
    localStorage.setItem("userName", user.fullname.toString());    
    this.router.navigate(['quests']);
  }
}
