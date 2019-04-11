import React, { useState, useEffect } from "react"
import Spinner from "react-spinner"
import QuestCard from "../quests/QuestCard"
import "./UserInfo.scss"

const UserInfo = ({ id }) => {
  const [quests, setQuests] = useState(null)
  const [loading, setLoading] = useState(true)
  const [defer, setDefer] = useState(null)

  useEffect(() => {
    if (id) {
      setLoading(true)
      setQuests([])
      clearTimeout(defer)
      fetch(`http://localhost:3000/users/${id}/quest-pathways`)
        .then(res => res.json())
        .then(data => {
          setDefer(
            setTimeout(() => {
              setLoading(false)
              setQuests(data[0].quest_paths)
            }, 1000)
          )
        })
        .catch(console.error)
    }
  }, [id])

  if (!quests) {
    return (
      <div class="center">
        <h3>Select a user</h3>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="loader">
        <Spinner />
      </div>
    )
  }

  return (
    <ul className="user-info">
      {quests.map(quest => {
        return (
          <li key={quest.order}>
            <QuestCard quest={quest} />
          </li>
        )
      })}
    </ul>
  )
}

export default UserInfo
