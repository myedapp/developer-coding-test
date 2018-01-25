import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	readonly file_server_url = "http://localhost/developer-coding-test/project/server/file_server.php";

	users = [];
	quests = [];

	constructor(private http:Http) { }

	ngOnInit() {
		//get student json files from server
		this.getStudentFile("users.json", this.users);
		this.getStudentFile("quest_pathways.json", this.quests);
	}

	/**
	 * Gets student file from server and caches results
	 * file: the file to request
	 * store: where to store the returned json data
	 */
	getStudentFile(file:string, store:any[]) {
		//request for user file
		let request = {
			json_file: file
		}

		//send request
		this.http.post(this.file_server_url, JSON.stringify(request))
			.subscribe((response) => {
				//try to parse and cache result
				try {
					store = JSON.parse(response.text());
				}
				//else display error
				catch (err) {
					//TODO: display err
				}
			})
	}
}
