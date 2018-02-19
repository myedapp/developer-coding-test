/**
 * Author: Joshua Carter
 * Created: 25/01/2018
 */
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http } from "@angular/http";

//alert types
enum AlertType {
	INFO,
	ERROR,
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	readonly file_server_url = "http://localhost/myed-code-test/project/server/file_server.php";

	//user data containers
	users = [];
	quest_paths = [];
	path = [];

	//dropdown text
	drop_text: string = "Select student";

	//alert lists
	errors: string[] = [];
	infos: string[] = [];

	constructor(private http: Http) { }

	ngOnInit() {
		//get student json files from server
		this.getStudentFile("users.json", this.users);
		this.getStudentFile("quest_pathways.json", this.quest_paths);

		//DEMO alerts
		this.alert(AlertType.INFO,
			"The demo errors below show a local and remote error.");
		this.getStudentFile("no_file_demo.json", null);
		this.getStudentFile("bad_json_demo.json", null);
	}

	/**
	 * Gets student file from server and caches results
	 * @param file the file to request
	 * @param cache array to store json objects
	 */
	getStudentFile(file: string, cache: any[]): void {
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
					if (err !== undefined) {
						//display error message
						this.alert(AlertType.ERROR, err.error);
					}
					//else no error
					else {
						//copy to cache
						Object.assign(cache, arr);
					}
				}
				//catch and display error
				catch (e) {
					this.alert(AlertType.ERROR,
						"Unable to parse <strong>" + file + "</strong> (" + e.message + ")");
				}
			})
	}

	/**
	 * Invoked when client selects a user from menu
	 * @param user selected user
	 */
	onSelectionChange(user: any): void {
		//find quest path with matching user id
		this.path = this.quest_paths.find(x => x.user_id == user.id).quest_paths;

		//change dropdown text to reflect selection
		this.drop_text = user.fullname;

		//if no matching path
		if (this.path === undefined) {
			//display err
			this.alert(AlertType.ERROR, "No matching path for user could be found.");
		}
	}

	/**
	 * Gets a string for displaying a quest's mark status to the client
	 * @param submitted whether quest has been submitted
	 * @param mark quest's mark [null or number]
	 * @return string to display
	 */
	getMarkStatus(submitted: boolean, mark: any): string {
		//if no submission, then need to submit
		if (!submitted) {
			return "Submission Required";
		}
		//or if have submission but no mark, then awaiting mark 
		else if (mark == null) {
			return "Not Yet Marked";
		}
		//else must have a submission and a mark, show mark
		else {
			return mark + "%";
		}
	}

	/**
	 * Displays error to client
	 * @param msg message to dispaly
	 */
	alert(type: AlertType, msg: string): void {
		//add to to appropriate list to be shown in template
		switch (type) {
			case AlertType.INFO: this.infos.push(msg); break;
			case AlertType.ERROR: this.errors.push(msg); break;
		}
	}
}
