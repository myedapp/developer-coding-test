import React from "react"
import ReactTable from 'react-table'
import matchSorter from 'match-sorter'
import 'react-table/react-table.css'

const Table = props => {

  // returns function to use the Match Sorter filtration algorithm
  const matchSorterFilter = (columnName) => {
    return (filter, rows) => matchSorter(rows, filter.value, { keys: [columnName] })
  }

  // reusable drop down filtering function
  const dropDownFilter = (filter, row) => {
    return filter.value === "All" ? true : row[filter.id] === filter.value
  }

  // reusable drop-down filter options function
  // accepts array of options - added to default 'show all' 
  const dropDownFilterOptions = options => {
    return ({ filter, onChange }) =>
      <select
        onChange={event => onChange(event.target.value)}
        style={{ width: "100%" }}
        value={filter ? filter.value : "All"}
      >
        <option value="All">Show All</option>
        { options.map(optionName => 
          <option value={optionName}>{ optionName }</option>
        )}
      </select>
  }

  // set the student's ID and toggle the modal display
  const displayStudent = rowData =>{
    props.setStudentId(rowData.userID)
    props.toggleStudentModal()
  }
 
  // set the quest's ID and toggle the modal display
  const displayQuest = rowData =>{
    props.setQuestId(rowData.questID)
    props.toggleQuestModal()
  }

  // table columns - linked to data via accessor
  const columns = [{
    Header: 'Name',
    accessor: 'fullName',
    filterMethod: matchSorterFilter('fullName'),
    filterAll: true,
    Cell: e =>
      <span 
        onClick={ () => displayStudent(e.original) }
        id="table-link"
      > 
        {e.value} 
      </span>,
    headerClassName: 'table-header'
  }, {
    Header: 'Quest',
    accessor: 'questName',
    filterMethod: matchSorterFilter('questName'),
    filterAll: true,
    minWidth: 200,
    Cell: e =>
    <span 
      onClick={ () => displayQuest(e.original) }
      id="table-link"
    > 
      {e.value} 
    </span>,
    headerClassName: 'table-header'
  }, {
    Header: 'Completion (%)', 
    accessor: 'questCompletion',
    headerClassName: 'table-header'
  }, {
    Header: 'Submitted?', 
    accessor: 'questSubmitted',
    filterMethod: dropDownFilter,
    Filter: dropDownFilterOptions(['Yes', 'No']),
    headerClassName: 'table-header' 
  }, {
    Header: 'Mark (%)', 
    accessor: 'questMark',
    // customing sorting method
    sortMethod: (a, b, desc) => {
      // force any 'unmarked' quests to the bottom
      a = a === "Unmarked" ? -Infinity : a
      b = b === "Unmarked" ? -Infinity : b
      // Return either 1 or -1 to indicate a sort priority
      if (a > b) {
        return 1
      }
      if (a < b) {
        return -1
      }
      // returning 0 or undefined will use any subsequent column sorting methods or the row index as a tiebreaker
      return 0
    },
    filterMethod: dropDownFilter,
    Filter: dropDownFilterOptions(['Unmarked']),
    headerClassName: 'table-header'
  }]

  return (
    <ReactTable
      data={ props.data }
      columns={columns}
      defaultPageSize={ props.data.length }
      className="-striped -highlight"
      filterable={ true }
    />
  )
}

export default Table