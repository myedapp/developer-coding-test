import React, { useState, useEffect } from "react"
import Spinner from "react-spinner"

const UserInfo = ({ id }) => {
  const [quests, setQuests] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(id)
    if (id) {
      setLoading(true)
      fetch(`http://localhost:3000/users/${id}/quest-pathways`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          return setQuests(data.quest_paths)
        })
        .catch(console.error)
    }
  }, [id])

  if (!quests) {
    return (
      <div>
        <h2>Select a user</h2>
      </div>
    )
  }

  return (
    <ul>
      {loading && <Spinner />}
      {quests.map(quest => (
        <li key={quest.order}>
          <QuestCard quest={quest} />
        </li>
      ))}
    </ul>
  )
}

export default UserInfo
