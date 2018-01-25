import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http } from "@angular/http";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	readonly file_server_url = "http://localhost/developer-coding-test/project/server/file_server.php";

	//element used to display errors
	@ViewChild("errEle")
	errEle: ElementRef;

	//data containers
	users = [];
	quest_paths = [];
	path = [];

	constructor(private http:Http) { }

	ngOnInit() {
		//get student json files from server
		this.getStudentFile("users.json", this.users);
		this.getStudentFile("quest_pathways.json", this.quest_paths);
	}

	/**
	 * Gets student file from server and caches results
	 * @param file the file to request
	 * @param cache array to store json objects
	 */
	getStudentFile(file: string, cache:any[]) {
		//request for user file
		let request = {
			json_file: file
		}

		//send request
		this.http.post(this.file_server_url, JSON.stringify(request))
			.subscribe((response) => {
				//try to parse and cache result
				try {
					//get json data as array
					let arr = JSON.parse(response.text());

					//find error (if any)
					let err = arr.find(x => x.hasOwnProperty('error'));

					//if found error
					if(err !== undefined) {
						//display error message
						this.errorDisplay(err.error);
					}
					//else no error
					else {
						//copy to cache
						Object.assign(cache, arr);
					}
				}
				//catch and display error
				catch (err) {
					this.errorDisplay(err.message);
				}
			})
	}

	/**
	 * Invoked when client selects a user from menu
	 * @param event onchange event
	 */
	onSelectionChange(event) {
		//get user id from student selection
		let user_id = Number(event.srcElement.value);

		//find quest path with matching user_id
		this.path = this.quest_paths.find(x => x.user_id == user_id).quest_paths;

		//if no matching path
		if(this.path === undefined) {
			//display err
			this.errorDisplay("no matching path for user");
		}
	}

	/**
	 * Displays error to client
	 * @param err message to dispaly
	 */
	errorDisplay(err: string) {
		this.errEle.nativeElement.innerHTML += "<p>" + err + "</p>";
	}
}
