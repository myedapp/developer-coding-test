import React, { useState, useEffect } from "react"
import Spinner from "react-spinner"
import QuestPathwayRow from "../quest-pathways/QuestPathwayRow"
import "./UserInfo.scss"

const UserInfo = ({ user }) => {
  const [questPathways, setQuestsPathways] = useState(null)
  const [loading, setLoading] = useState(true)
  const [defer, setDefer] = useState(null)
  const [fullName, setFullName] = useState(null)

  useEffect(() => {
    setFullName(null)
    if (user) {
      setLoading(true)
      setQuestsPathways([])
      clearTimeout(defer)
      fetch(`http://localhost:3000/users/${user.id}/quest-pathways`)
        .then(res => res.json())
        .then(data => {
          setDefer(
            setTimeout(() => {
              setLoading(false)
              setFullName(user.fullname)
              setQuestsPathways(data[0].quest_paths)
            }, 1000)
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

  if (loading) {
    return (
      <div className="loader">
        <Spinner />
      </div>
    )
  }
  return (
    <article className="user-info">
      <h1>{fullName}</h1>
      <table class="quest-pathway-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Submitted</th>
            <th>Completion</th>
            <th>Mark</th>
          </tr>
        </thead>
        <tbody>
          {questPathways.map(({ order, quest, mark }) => (
            <QuestPathwayRow
              key={order}
              quest={quest}
              order={order}
              mark={mark}
            />
          ))}
        </tbody>
      </table>
    </article>
  )
}

export default UserInfo
