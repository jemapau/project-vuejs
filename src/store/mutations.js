import * as types from './mutations-types'

export default {
  [types.LOAD_MARKERS] (state, markerList) {
    state.markers = markerList
  },

  [types.LOAD_MARKER] (state, marker) {
    state.marker = marker
  }
}
