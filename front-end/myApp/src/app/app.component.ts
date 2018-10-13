import { Component } from '@angular/core';
import { EdServiceService } from './ed-service.service';
import { HttpClient } from '@angular/common/http';
import { EmptyError } from 'rxjs/internal/util/EmptyError';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any;
  allquests: any;
  quests: any;
  isclick = false;
  constructor(private http: HttpClient, private service: EdServiceService) { }

  ngOnInit() {
    this.getAllQuest();
    this.getAllUsers();
  }
  //get all quests 
  getAllQuest() {
    this.service.getAllQuest().subscribe(res => {
      this.allquests = res;
    })

  }
  //get users' name and ID
  getAllUsers() {
    this.service.getAllUsers().subscribe(res => {
      this.users = res;
    })
  }
  // get quests for each user
  getQuests(id) {
    this.isclick = true;
    this.allquests.forEach(element => {
      if (element.user_id === id) {
        element.quest_paths.forEach(ele => {
          if (ele.mark.submitted === true) {
            ele.mark.submitted = "submitted";
          }
          if (ele.mark.submitted === false) {
            ele.mark.submitted = "unsubmitted";
          }
          if (!isNaN(ele.mark.completion)) {
            ele.mark.completion = ele.mark.completion + "%";
          }
        });
        this.quests = element.quest_paths;
      }
    });
  }

}







