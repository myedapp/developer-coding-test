import React, { useState, useEffect } from "react"
import UserList from "./components/users/UserList"
import UserInfo from "./components/users/UserInfo"
import { MoonLoader } from "react-spinners"

import "./App.scss"
const App = () => {
  const [users, setUsers] = useState([])
  const [userId, setUserId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [defer, setDefer] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(users => {
        setUsers(users)
        setIsLoading(false)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  const selectUser = id => {
    setUserId(id)
  }

  if (isLoading) {
    return (
      <aside className="user-aside">
        <h2>Students</h2>
        <div className="loader">
          <MoonLoader color="white" size={40} />
        </div>
      </aside>
    )
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
