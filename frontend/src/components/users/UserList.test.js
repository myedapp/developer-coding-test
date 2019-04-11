import React from "react"
import ReactDOM from "react-dom"
import { shallow } from "enzyme"
import UserList from "./UserList"
import users from "./users.json"

describe("Component: UserList", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<UserList users={users} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it("renders users", () => {
    const wrapper = shallow(<UserList users={users} />)
    expect(wrapper.find("li").length).toBe(users.length)
  })
})
