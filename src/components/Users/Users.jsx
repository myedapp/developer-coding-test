import './Users.scss'
import { fetchUsers } from './xhr'

import Logo from 'Logo/Logo'
import Progress from 'Progress/Progress'
import Spindle from 'Spindle/Spindle'
import Tag from 'Tag/Tag'

import React from 'react'

export default class Users extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = { loading: true, users: [] }
  }

  async componentWillMount() {
    const users = await fetchUsers()
    this.setState({ loading: false, users: users })
  }

  render() {
    const { loading, users } = this.state

    return (
      <div className="Users">
        <header className="Users__header">
          <h1 className="Users__header-content"><Logo /> - My Students</h1>
        </header>
        <div className="Users__container">
          { loading
            ? <span className="Users__loading">loading</span>
            : users.map(user => (
              <div key={user.id} className="Users__user">
                <div className="Users__user-header">
                  <img src={`https://api.adorable.io/avatars/100/${user.id}.png`} className="Users__avatar" />
                  <h2 className="Users__user-name">{user.fullname}</h2>
                  <ul className="Users__nav">
                    <li className="Users__nav-item Users__nav-item--disabled">Profile</li>
                    <li className="Users__nav-item Users__nav-item--active">Quests</li>
                  </ul>
                </div>
                <div className="Users__quests">
                  { user.quests.map(path => (
                    <div key={path.quest.id} className="Users__quest">
                      <div className="Users__left-col">
                        <h3 className="Users__quest-title">{path.quest.name}</h3>
                        <Progress className="Users__quest-completion" value={path.mark.completion} label="Completion" />
                      </div>
                      <div className="Users__right-col">
                        <Tag className="Users__quest-submitted" active={path.mark.submitted}>{path.mark.submitted ? 'submitted' : 'in progress' }</Tag>
                        { path.mark.mark 
                          ? <Spindle className="Users__quest-mark" value={path.mark.mark} label="Mark" />
                          : null
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
