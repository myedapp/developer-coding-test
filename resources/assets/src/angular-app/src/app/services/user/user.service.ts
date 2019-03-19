import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mark } from '../../model/mark.model';
import { Quest } from '../../model/quest.model';
import { User } from '../../model/user.model';
import { UserQuest } from '../../model/UserQuest.model';
import {Observable} from 'rxjs';

const USERS_API_URL: string = 'http://localhost:8000/api/users';
const USER_QUESTS_API_URL : string = 'http://localhost:8000/api/quests/'
@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(USERS_API_URL);
    }

    getUserQuestByUserId(userId : number) {
    	return this.httpClient.get<UserQuest[]>(USER_QUESTS_API_URL + userId);
    }
}