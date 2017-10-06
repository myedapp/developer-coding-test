import axios from 'axios'

export async function fetchUsers() {
  const [ userResponse, questResponse ] = await Promise.all([
    axios.get('/api/users.json'),
    axios.get('/api/quest-pathways.json'),
  ])

  return userResponse.data.map(user => {
    
    let quests = questResponse.data.find(quest => user.id === quest.user_id)
    
    if(typeof quests === 'undefined') {
      quests = []
    } else {
      quests = quests.quest_paths.sort((a, b) => a.order - b.order)
    }
    
    return { ...user, quests }
  })
}