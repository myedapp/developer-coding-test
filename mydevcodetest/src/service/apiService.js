import axios from 'axios'
import API from '@/utils/apiUrl'

const log = (msg) => {
  console.log(msg)
}

export function getUsers () {
  return new Promise((resolve, reject) => {
    axios.get(`${API.USERS}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      log('GET FILE RESPONSE')
      log(response)

      if (response.status === 200 && response.data && response.data.length > 0) {
        return resolve(response.data)
      }

      reject(new Error('No Users Retrieved'))
    }).catch((error) => {
      // it occurs only when no user in session so should never happen
      reject(error)
    })
  })
}

export function getQuestPaths () {
  return new Promise((resolve, reject) => {
    axios.get(`${API.QUEST_PATHS}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      log('GET FILE RESPONSE')
      log(response)

      resolve(response)
    }).catch((error) => {
      // it occurs only when no user in session so should never happen
      reject(error)
    })
  })
}
