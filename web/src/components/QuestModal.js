import React from 'react'
import ReactModal from 'react-modal'

const QuestModal = props => {

  const questIterations = props.data.filter(quest => quest.questID === props.questId )

  // the quest's average mark across all students
  const averageMark = (questIterations) => {
    // filter the quests for those which have been marked
    let markedQuests = questIterations.filter(quest => quest.questMark !== 'Unmarked')
    if (markedQuests.length > 0) {
      // calculate the average
      let total = 0
      markedQuests.forEach(quest => total += quest.questMark)
      return `${Math.round(total / markedQuests.length)}%`
    } else {
      // quest has not been marked
      return "N/A"
    }
  } 

  // the quest's average completion rate across all students
  const averageCompletion = (questIterations) => {
    // filter the quests for those which have been submitted by students
    let submittedQuests = questIterations.filter(quest => quest.questSubmitted === 'Yes')
    if (submittedQuests.length > 0) {
      // calculate the average
      let total = 0
      submittedQuests.forEach(quest => total += quest.questCompletion)
      return `${Math.round(total / submittedQuests.length)}%`
    } else {
      // the quest has not been submitted by any students
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
        { questIterations[0].questName }
      </h2>
      <div className="modal-body">
        <p>
          <strong>Average Student Mark: &nbsp;</strong> 
          { averageMark(questIterations) }
        </p>
        <p>
          <strong>Average Student Completion: &nbsp;</strong> 
          { averageCompletion(questIterations) }
        </p>
        <p>
          <strong>Unmarked Quests: &nbsp;</strong> 
          { questIterations.filter(quest => quest.questMark === 'Unmarked').length }
        </p>
      </div>
      <button className="modal-button" onClick={ () => props.toggleModal() } >
        Close
      </button>
    </ReactModal>
  )
}
export default QuestModal
