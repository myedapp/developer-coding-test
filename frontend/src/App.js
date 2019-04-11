import React, { useState, useEffect } from "react"

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

  return <h1>{users.length}</h1>
}

export default App
