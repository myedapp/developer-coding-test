import React from "react"

import "./QuestPathwayRow.scss"

const QuestPathwayRow = ({ order, quest, mark }) => {
  const { name } = quest
  const { submitted, completion } = mark

  return (
    <tr>
      <td>{name}</td>
      <td>{submitted ? "√" : "x"}</td>
      <td>
        <progress value={completion} max="100" />
      </td>
      <td>{mark.mark}</td>
    </tr>
  )
}

export default QuestPathwayRow
