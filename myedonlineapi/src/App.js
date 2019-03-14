import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
 


let config = {
  headers: {
    api_key: '986Aed091234',
  }
};
const datColumns=[
										   {
											label: 'ID',
											field: 'id',
											sort: 'asc',
											width: 10
										  },
										  {
											label: 'Quests',
											field: 'quest',
											sort: 'asc',
											width: 100
										  },
										  {
											label: 'Marks',
											field: 'mark',
											sort: 'asc',
											width: 50
										  },
										  {
											label: 'Completion',
											field: 'completion',
											sort: 'asc',
											width: 50
										  },
										  {
											label: 'Submited',
											field: 'submited',
											sort: 'asc',
											width: 100
										  },
										 
										];


class App extends Component {
state = {
    quests: [],
	users:[]
  }
	componentDidMount() {
		//axios.defaults.headers.common['Authorization'] = "Bearer 986Aed091234";
    
	  axios.get('http://127.0.0.1/MyEdOnline/API/api.php?f=getUser', { headers: { Authorization: "986Aed091234"} })
      .then(response => {
		  const users=response.data;
		  this.setState({ users });

	  
	  })
	  axios.get('http://127.0.0.1/MyEdOnline/API/api.php?f=getQuest', { headers: { Authorization: "986Aed091234"} })
      .then(response => {
		  const quests=response.data;
		  this.setState({ quests });
		  
	  
	  })
  }
  render () {
	const row=  (
	this.state.quests.map(x => Object.assign(x, this.state.users.find(y => y.id == x.user_id))).map(info => ({
	name:info.fullname, quests:[info.quest_paths.map(function(item,i){
											if(item.mark.mark===null)
											{
												item.mark.mark='No marked yet';
											}
											if(item.mark.submitted===false)
											{
												item.mark.submitted='Not Submitted';
												
											}
											if(item.mark.submitted===true)
											{
												item.mark.submitted='Submitted';
												
											}
										 return({
											id: item.quest.id,
											quest: item.quest.name,
											mark: item.mark.mark,
											completion: item.mark.completion+'%',
											submited: item.mark.submitted,
										  });
									
					 }
					)]
  })
				)
			 )
			 
const Check=row.map(function(key,x){
	
	const rowQ=key.quests;
	const data= {
		columns: datColumns,
		rows: rowQ[0]
	}
	console.log(rowQ[0]);
	return(
	<div>
	<h2>{key.name}</h2>
	<MDBTable autoWidth striped bordered>
	 <MDBTableHead columns={data.columns}/>
      <MDBTableBody rows={data.rows} />
	  </MDBTable>
	
	</div>);
});			 
   return (
   <div>
   <Header/>
   {Check}
	</div>
  );
  }

}
  class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Student Performance</h1>
			
         </div>
      );
   }
}
export default App