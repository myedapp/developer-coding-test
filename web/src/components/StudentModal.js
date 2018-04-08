import React from 'react'
import ReactModal from 'react-modal'

const StudentModal = props => {

  const studentQuests = props.data.filter(quest => quest.userID === props.studentId )
  
  // the student's average quest mark
  const averageMark = (studentQuests) => {
    // filter the student's quests for those which have been marked
    let markedQuests = studentQuests.filter(quest => quest.questMark !== 'Unmarked')
    if (markedQuests.length > 0) {
      // calculate the average
      let total = 0
      markedQuests.forEach(quest => total += quest.questMark)
      return `${Math.round(total / markedQuests.length)}%`
    } else {
      // student has no marks
      return "N/A"
    }
  } 

  // the student's average completion rate
  const averageCompletion = (studentQuests) => {
    // filter the student's quests for those which have been submitted
    let submittedQuests = studentQuests.filter(quest => quest.questSubmitted === 'Yes')
    if (submittedQuests.length > 0) {
      // calculate the average
      let total = 0
      submittedQuests.forEach(quest => total += quest.questCompletion)
      return `${Math.round(total / submittedQuests.length)}%`
    } else {
      // student has no submitted quests
      return "N/A"
    }
  } 

  return (
    <ReactModal
      isOpen={ !!props.displayModal }
      onRequestClose={ props.toggleModal }
      ariaHideApp={true}
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
      contentLabel="Modal"
      appElement={document.getElementById('app')}
      closeTimeoutMS={200}
      className="modal"
    >
      <h2 className="modal-title">
        { studentQuests[0].fullName }
      </h2>
      <div className="modal-body">
        <p>
          <strong>Average Quest Mark: &nbsp;</strong> 
          { averageMark(studentQuests) }
          <span class="average-text"> <br />(Student Average: {averageMark(props.data)})</span>
        </p>
        <p>
          <strong>Average Quest Completion: &nbsp;</strong> 
          { averageCompletion(studentQuests) }
          <span class="average-text"> <br />(Student Average: {averageCompletion(props.data)})</span>
        </p>
        <p>
          <strong>Submitted Quests: &nbsp;</strong> 
          { studentQuests.filter(quest => quest.questSubmitted === 'Yes').length }
        </p>
        <p>
          <strong>Unsubmitted Quests: &nbsp;</strong> 
          { studentQuests.filter(quest => quest.questSubmitted === 'No').length }
        </p>
        <p>
          <strong>Unmarked Quests: &nbsp;</strong> 
          { studentQuests.filter(quest => quest.questMark === 'Unmarked').length }
        </p>
      </div>
      <button className="modal-button" onClick={ () => props.toggleModal() } >
        Close
      </button>
    </ReactModal>
  )
}
export default StudentModal
