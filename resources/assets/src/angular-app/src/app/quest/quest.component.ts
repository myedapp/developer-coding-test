import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { UserQuest } from '../model/UserQuest.model';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {
  userQuests: UserQuest[];
  userName: string;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  	let userId = localStorage.getItem("userId");
  	let userName = localStorage.getItem("userName");
    if(!userId || !userName) {
      alert("Invalid action.")
      this.router.navigate(['']);
      return;
    }
    this.userName = userName;
    
    this.userService.getUserQuestByUserId(+userId)
      .subscribe( data => {
        this.userQuests = data;
        
      });

  }

}
