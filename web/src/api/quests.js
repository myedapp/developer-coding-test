import React from 'react'
import api from './init.js'

export function fetchData() {
  return api.get('/quest_pathways').then(res => res.data)
}

export default fetchData