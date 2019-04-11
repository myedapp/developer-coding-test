import QuestPathwayTable from "./QuestPathwayTable"
import { render, unmountComponentAtNode } from "react-dom"
import { shallow } from "enzyme"
import React from "react"

describe("Component: QuestPathwayTable", () => {
  it("should mount without crashing", () => {
    const elm = document.createElement("div")
    render(<QuestPathwayTable questPathways={[]} />, elm)
    unmountComponentAtNode(elm)
  })

  it("it should have expected columns", () => {
    const title = "Title"
    const mark = "Mark"

    const wrapper = shallow(<QuestPathwayTable questPathways={[]} />)

    expect(
      wrapper
        .find("th")
        .first()
        .text()
    ).toBe(title)

    expect(
      wrapper
        .find("th")
        .last()
        .text()
    ).toBe(mark)
  })
})
