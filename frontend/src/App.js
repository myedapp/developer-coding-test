import React, { useState, useEffect } from "react"
import UserList from "./components/users/UserList"
import UserInfo from "./components/users/UserInfo"

import "./App.scss"
const App = () => {
  const [users, setUsers] = useState([])
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(users => {
        setUsers(users)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  const selectUser = id => {
    setUserId(id)
  }

  const user = userId ? users.find(u => u.id === userId) : null
  return (
    <>
      <aside className="user-aside">
        <h2>Students</h2>
        <UserList selectedId={userId} users={users} handleClick={selectUser} />
      </aside>
      <main className="main-content">
        <UserInfo user={user} />
      </main>
    </>
  )
}

export default App
