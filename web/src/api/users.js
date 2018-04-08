import React from 'react'
import api from './init.js'

export function fetchUsers() {
  return api.get('/users').then(res => res.data)
}

export default fetchUsers