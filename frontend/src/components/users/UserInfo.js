import React, { useState, useEffect } from "react"
import {MoonLoader} from "react-spinners"
import "./UserInfo.scss"
import QuestPathwayTable from "../quest-pathways/QuestPathwayTable"

const UserInfo = ({ user }) => {
  const [questPathways, setQuestsPathways] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [defer, setDefer] = useState(null)
  const [fullName, setFullName] = useState(null)

  useEffect(() => {
    setFullName(null)
    if (user) {
      setIsLoading(true)
      setQuestsPathways([])
      clearTimeout(defer)
      fetch(`http://localhost:3000/users/${user.id}/quest-pathways`)
        .then(res => res.json())
        .then(data => {
          setDefer(
            setTimeout(() => {
              setQuestsPathways(data[0].quest_paths)
              setIsLoading(false)
              setFullName(user.fullname)
            }, 400)
          )
        })
        .catch(console.error)
    }
  }, [user])

  if (!questPathways) {
    return (
      <div className="center">
        <h3>Select a Student</h3>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="center">
        <MoonLoader color='dimgray' size={40} />
      </div>
    )
  }
  return (
    <article className="user-info">
      <div className="user-info-title">
      <h1>Quest Pathways</h1>
      <h2><span>Student:</span> {fullName}</h2>
      </div>
      <QuestPathwayTable questPathways={questPathways} />
    </article>
  )
}

export default UserInfo
