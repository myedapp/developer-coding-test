import React from "react"
import "./UserList.scss"

const UserList = ({ users, handleClick, selectedId }) => {
  const active = id => {
    return `user-info-button ${selectedId === id ? "active" : ""}`
  }
  return (
    <ul className="user-list">
      {users.map(({ id, fullname }) => (
        <li key={id}>
          <button onClick={() => handleClick(id)} className={active(id)}>
            {fullname}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default UserList
