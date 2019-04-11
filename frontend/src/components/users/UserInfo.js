import React, { useState, useEffect } from "react"
import Spinner from "react-spinner"
import QuestCard from "../quests/QuestCard"
import "./UserInfo.scss"

const UserInfo = ({ user }) => {
  const [quests, setQuests] = useState(null)
  const [loading, setLoading] = useState(true)
  const [defer, setDefer] = useState(null)
  const [fullName, setFullName] = useState(null)

  useEffect(() => {
    setFullName(null)
    if (user) {
      setLoading(true)
      setQuests([])
      clearTimeout(defer)
      fetch(`http://localhost:3000/users/${user.id}/quest-pathways`)
        .then(res => res.json())
        .then(data => {
          setDefer(
            setTimeout(() => {
              setLoading(false)
              setFullName(user.fullname)
              setQuests(data[0].quest_paths)
            }, 1000)
          )
        })
        .catch(console.error)
    }
  }, [user])

  if (!quests) {
    return (
      <div className="center">
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
      <h1>{fullName}</h1>
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
