import React from "react"
import ReactDOM from "react-dom"
import { act } from "react-testing-library"
import { shallow } from "enzyme"
import App from "./App"
import users from "./components/users/users.json"

describe("Component: App", () => {
  afterEach(() => {
    fetch.resetMocks()
  })

  it("first run", () => {
    expect(true).toBe(true)
  })
  /*
   THIS WOULD WORK BUT FACEBOOK HASN'T PATCHED THE BUG YET UNTIL NEXT RELEASE XD
  */
  it("renders without crashing", () => {
    fetch.mockResponse(JSON.stringify([...users]))
    const div = document.createElement("div")
    act(() => {
      ReactDOM.render(<App />, div)
    })

    act(() => {
      ReactDOM.unmountComponentAtNode(div)
    })
  })

  it("loads users", () => {
    fetch.mockResponse(JSON.stringify([...users]))
    const wrapper = shallow(<App />)
    expect(wrapper.state().users.length).toBe(5)
  })
})
