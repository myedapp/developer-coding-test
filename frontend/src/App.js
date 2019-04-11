import React, { useState, useEffect } from "react"
import UserList from "./components/users/UserList"
import "./App.scss"
const App = () => {
  const [users, setUsers] = useState([])

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

  return (
    <>
      <aside class="user-aside">
        <h2>Students</h2>
        <UserList users={users} />
      </aside>
      <main class="main-content">text</main>
    </>
  )
}

export default App
