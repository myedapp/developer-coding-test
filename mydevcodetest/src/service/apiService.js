import axios from 'axios'
import API from '@/utils/apiUrl'

// Method for writing logs, rather than inline console.logs
const log = (msg) => {
  // console.log(msg)
}

const validResponse = (response) => {
  if (response) {
    // Status Code?
    if (response.code) {
      return (response.code >= 200 && response.code < 300)
    }

    // Response OK?
    return (response.statusText && response.statusText === 'OK')
  }

  log('--- INVALID RESPONSE ---')
  return false
}

// Retrieve users from server
export function getUsers () {
  return new Promise((resolve, reject) => {
    log('Submitting "get users" Request...')
    axios.get(`${API.USERS}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      log('"get users" success!')
      log(response)

      // Verify Successful response from server
      if (validResponse(response)) {
        // Validate User Array
        const users = response.data || []
        if (users.length > 0) {
          return resolve(users)
        }
      }

      return reject(new Error('Warning: No Users retrieved'))
    }).catch((error) => {
      log('"get users" ERROR')
      log(error)
      // Return Error for Message
      return reject(error)
    })
  })
}

// Retrieve quest paths from server
export function getQuestPaths () {
  return new Promise((resolve, reject) => {
    log('Submitting "get quest paths" Request...')
    axios.get(`${API.QUEST_PATHS}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      log('"get quest paths" success!')
      log(response)

      // Verify Successful response from server
      if (validResponse(response)) {
        // Validate User Array

        const questPaths = response.data || []
        if (questPaths.length > 0) {
          // Return Quest Path Array
          return resolve(questPaths)
        }
      }

      return reject(new Error('Warning: No Users retrieved'))
    }).catch((error) => {
      log('"get quest paths" ERROR')
      log(error)

      // Return Error for Message
      return reject(new Error('Warning: No Users retrieved'))
    })
  })
}
