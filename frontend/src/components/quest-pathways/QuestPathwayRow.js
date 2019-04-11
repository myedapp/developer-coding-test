import React from "react"
import {Line} from 'rc-progress'
import "./QuestPathwayRow.scss"

import MaterialIcon from 'material-icons-react';

const tick = <MaterialIcon color="limegreen" icon="done" />
const cross = <MaterialIcon color="coral" icon="error" />

const QuestPathwayRow = ({ order, quest, mark }) => {
  const { name } = quest
  const { submitted, completion } = mark
  const color =
    completion > 70 ? "limegreen" : completion > 20 ? "coral" : "crimson"
  return (
    <tr>
      <td>{name}</td>
      <td>{submitted ? tick : cross }</td>
      <td>
      <div className="pad-to-right">
      <span className="progress-completed-text">{completion} &#37;</span>
      <Line percent={completion} strokeWidth="4" strokeColor={color} />
      </div>
      </td>
      <td>{mark.mark || 0} &#37;</td>
    </tr>
  )
}

export default QuestPathwayRow
