package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type User struct {
	Id       int    `json:"id"`
	Fullname string `json:"fullname"`
}

type Quest struct {
	Id        int    `json:"id"`
	Name      string `json: "name"`
	Is_active bool   `json: "is_active"`
}

type Mark struct {
	Submitted  bool `json: "submitted"`
	Completion int  `json: "completion"`
	Mark       int  `json: "mark"`
}

type Questpaths struct {
	Order int   `json: "order"`
	Quest Quest `json: "quest"`
	Mark  Mark  `json: "mark"`
}

type UserQuest struct {
	User_id     int          `json: "user_id"`
	Quest_paths []Questpaths `json: "quest_paths"`
}

func getUsers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	//to set response status
	// w.WriteHeader(500)
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Accept-Encoding,Content-Encoding, X-CSRF-Token, Authorization")

	var users []User
	byteValue, err := ioutil.ReadFile("./users.json")
	if err != nil {
		fmt.Println(err)
	}

	json.Unmarshal(byteValue, &users)

	json.NewEncoder(w).Encode(users)
}

// func getReports() {
func getReports(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Accept-Encoding,Content-Encoding, X-CSRF-Token, Authorization")

	var userQuests []UserQuest
	byteValue, err := ioutil.ReadFile("./quest_pathways.json")
	if err != nil {
		fmt.Println(err)
	}

	json.Unmarshal(byteValue, &userQuests)

	// fmt.Println("User Quests: ", userQuests)

	json.NewEncoder(w).Encode(userQuests)
}

func main() {

	// err = decoder.Decode(&user)
	// if err != nil {
	// fmt.Println(users)
	// }

	// for k := range users {
	// 	fmt.Println("User is: ", users[k].Fullname)
	// }

	http.HandleFunc("/get-students", getUsers)
	http.HandleFunc("/get-reports", getReports)
	http.Handle("/", http.FileServer(http.Dir("./client/build/")))
	http.ListenAndServe(":8080", nil)
}
