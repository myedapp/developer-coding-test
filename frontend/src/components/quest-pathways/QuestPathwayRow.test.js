import QuestPathwayRow from "./QuestPathwayRow"
import { render, unmountComponentAtNode } from "react-dom"
import { shallow } from "enzyme"
import React from "react"

describe("Component: QuestPAthwayRow", () => {
  let quest, mark, order
  beforeEach(() => {
    quest = { name: "Quest" }

    mark = {
      mark: 100,
      submitted: true,
      completion: 70
    }
    order = 1
  })

  it("should render component", () => {
    const elm = document.createElement("tbody")
    render(<QuestPathwayRow quest={quest} order={order} mark={mark} />, elm)
    unmountComponentAtNode(elm)
  })

  it("should have a quest", () => {
    const wrapper = shallow(
      <QuestPathwayRow quest={quest} order={order} mark={mark} />
    )
    const result = wrapper
      .find("td")
      .first()
      .text()
    expect(result).toBe(quest.name)
  })

  it("should have a mark percent", () => {
    const x = {
      mark: 100,
      submitted: true,
      completion: 70
    }
    const wrapper = shallow(
      <QuestPathwayRow quest={quest} order={order} mark={x} />
    )
    const mark = wrapper
      .find("td")
      .last()
      .text()
    expect(mark).toBe("100 %")
  })
})
