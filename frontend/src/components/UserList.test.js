import React from "react"
import ReactDOM from "react-dom"
import { shallow } from "enzyme"
import UserList from "./UserList"

describe("Component: UserList", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<UserList users={[]} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
