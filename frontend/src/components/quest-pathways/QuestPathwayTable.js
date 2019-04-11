import React from "react"
import QuestPathwayRow from "./QuestPathwayRow"
import "./QuestPathwayTable.scss"

const QuestPathwayTable = ({ questPathways }) => (
  <table className="quest-pathway-table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Submitted</th>
        <th>Completion</th>
        <th>Mark</th>
      </tr>
    </thead>
    <tbody>
      {questPathways.map(({ order, quest, mark }) => (
        <QuestPathwayRow key={order} quest={quest} order={order} mark={mark} />
      ))}
    </tbody>
  </table>
)

export default QuestPathwayTable
