import React, { Component } from 'react';

class Display extends Component {
  render () {
    return (
      <tr>
          <td className='fullname'>{this.props.data.fullname} </td>
          <td className='quest'>{this.props.data.quest.map((quest, i) =>
            <p className='detail' key={i}>
              {quest.quest.name}
            </p>
          )}
          </td>
          <td className='completion'>{this.props.data.quest.map((quest, i) =>
            <p className='detail' key={i}>
              {quest.mark.completion}
            </p>
          )}
          </td>
          <td className='mark'>{this.props.data.quest.map((quest, i) =>
            <p className='detail' key={i}>
              {quest.mark.mark}
            </p>
          )}
          </td>
      </tr>
    )
  }
}

export default Display;
