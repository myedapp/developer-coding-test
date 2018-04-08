import React, { Component } from "react"
import fetchQuests from './api/quests'
import fetchUsers from './api/users'
import Table from './components/Table'
import StudentModal from './components/StudentModal'
import QuestModal from './components/QuestModal'

class App extends Component {
  
  constructor(props) {
    super(props)
    this.joinDisplayData = this.joinDisplayData.bind(this)
    this.findFullName = this.findFullName.bind(this)
    this.toggleStudentModal = this.toggleStudentModal.bind(this)
    this.toggleQuestModal = this.toggleQuestModal.bind(this)
    this.setStudentId = this.setStudentId.bind(this)
    this.setQuestId = this.setQuestId.bind(this)
    this.state = {
      // raw quests data
      questPathways: null,
      // raw users data
      userData: null,
      // joined data for display rendering
      displayData: null,
      // boolean for student modal display
      displayStudentModal: false,
      // boolean for quest modal display
      displayQuestModal: false,
      // set id for a specific student or quest for modal display
      selectedStudentId: null,
      selectedQuestId: null
    }
  }

  // stitch the fetched data for display - each quest is an object in the displayData array
  joinDisplayData() {
    // new data array
    const displayDataArray = []
    // proceed if data has been fetched from the API
    if (this.state.questPathways && this.state.userData) {
      // loop through each user in the quest pathways 
      this.state.questPathways.forEach(userQuests => {
        // loop through each individual user quest
        userQuests.quest_paths.forEach(singleQuest => {
          // save quest data to an object
          const singleQuestData = {
            userID: userQuests.user_id,
            fullName: this.findFullName(userQuests.user_id),
            questID: singleQuest.quest.id,
            questName: singleQuest.quest.name,
            questSubmitted: singleQuest.mark.submitted ? "Yes" : "No",
            questCompletion: singleQuest.mark.completion,
            questMark: singleQuest.mark.mark ? singleQuest.mark.mark : "Unmarked" 
          }
          // add the quest data to the displayData array
          displayDataArray.push(singleQuestData)
        })
      })
      // save the displayData array to state  
      this.setState({
        displayData: displayDataArray
      })
    }
  }

  // search the users data by ID to find student's full name
  findFullName(userID) {
    return this.state.userData.find(user => user.id === userID).fullname
  }

  // toggle a boolean to display either a student or quest modal
  toggleStudentModal() {
    this.setState(previousState => ({
      displayStudentModal: !previousState.displayStudentModal
    }))
  }

  toggleQuestModal() {
    this.setState(previousState => ({
      displayQuestModal: !previousState.displayQuestModal
    }))
  }

  // set the selected student id for modal display
  setStudentId(studentID) {
    this.setState({
      selectedStudentId: studentID      
    })
  }

  // set the selected quest id for modal display
  setQuestId(questID) {
    this.setState({
      selectedQuestId: questID      
    })
  }

  render() {
    const { 
      displayData, 
      displayStudentModal,
      displayQuestModal, 
      selectedStudentId, 
      selectedQuestId } = this.state

    return(
      <div className="container">
        <div>
          <h1>Quest Link</h1>
        </div>
        {
          !!displayData && 
          <Table 
            data={ displayData }
            toggleStudentModal={ this.toggleStudentModal }
            toggleQuestModal={ this.toggleQuestModal }  
            setStudentId={ this.setStudentId }
            setQuestId={ this.setQuestId } 
          />
        }
        {
          !!displayData && !!displayStudentModal &&
          <StudentModal 
            displayModal={ displayStudentModal }
            toggleModal={ this.toggleStudentModal }
            data={ displayData }
            studentId={ selectedStudentId }
          />
        }
        {
          !!displayData && !!displayQuestModal &&
          <QuestModal 
            displayModal={ displayQuestModal }
            toggleModal={ this.toggleQuestModal }
            data={ displayData }
            questId={ selectedQuestId }
          />
        }        
      </div>
    )
  }

  load() {
    // fetch all the quest pathways from the API
    fetchQuests()
      .then(questData => {
        this.setState({ questPathways: questData })
        // fetch all the user data from the API
        fetchUsers()
          .then(users => {
            this.setState({ userData: users })
            this.joinDisplayData()
          })
      })
  }

  // When the App first renders
  componentDidMount() {
    this.load()
  }

}

export default App

