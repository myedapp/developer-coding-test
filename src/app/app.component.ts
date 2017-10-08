import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {User} from "./@models/user";
import {QuestPath} from "./@models/quest-path";
import {QuestPathway} from "./@models/quest-pathway";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public users: User[] = [];
  public usersById: User[] = [];
  public questPathways: QuestPathway[] = [];
  public showingUserId: number;
  constructor(private http: Http) {}

  ngOnInit() {
    // Get users
    this.getApiData('users').then(response => {
      response.map(userData => {
        const newUser = new User(userData);
        // Add user to user list
        this.users.push(newUser);
        // Add user to user by id list
        this.usersById[newUser.id] = newUser;
      });
    });

    // Get quest pathways
    this.getApiData('quest_pathways').then(response => {
      response.map(questPathwayData => {
        let questPathway: QuestPathway = new QuestPathway();
        questPathway.userId = questPathwayData.user_id;
        questPathway.questPaths = [];
        questPathwayData.quest_paths.map(questPathData => {
          questPathway.questPaths.push(new QuestPath(questPathData));
        });
        this.questPathways.push(questPathway);
      })
    })
  }

  /**
   * Return a user object by id
   * @param {number} id
   * @returns {User}
   */
  public getUserById(id: number) {
    return this.usersById[id];
  }

  /**
   * Request data from api
   * @param {string} apiModule
   * @returns {Promise<any>}
   */
  public getApiData(apiModule: string) {
    return this.http.get(`/assets/api/${apiModule}.json`)
      .toPromise()
      .then(response => response.json())
      .catch(error => {
        console.log(error.getMessages());
      });
  }

  /**
   * Update the current showing user id
   * @param userId
   */
  public updateUserFilter(userId) {
    this.showingUserId = !userId ? null: userId;
  }
}
