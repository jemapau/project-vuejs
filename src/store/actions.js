import axios from 'axios'
import * as types from './mutations-types'

export const loadMarks = ({ commit }) => {
  axios.get('http://www.mocky.io/v2/58c0fff9110000310863edc4').then((response) => {
    commit(types.LOAD_MARKERS, response.data)
  }).catch((err) => {
    console.error(err)
  })
}

export const loadMarker = ({ commit, state }, markerId) => {
  const marker = state.markers.filter(m => m.id === markerId)[0]
  commit(types.LOAD_MARKER, marker)
}
