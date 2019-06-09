import API from '@/utils/http-constant'
import {
  RESEARCH_MOVIES_REQUEST,
  RESEARCH_MOVIES_SUCCESS,
  RESEARCH_MOVIES_ERROR
} from './actions/movie.actions'

const actions = {
  [RESEARCH_MOVIES_REQUEST]: ({ commit, dispatch }, data) => {
    return new Promise((resolve, reject) => {
      commit(RESEARCH_MOVIES_REQUEST)
      API({
        method: 'POST',
        url: '&type=movie&s=' + data.title + (data.year ? '&y=' + data.year : '') + '&page=' + data.page
      })
        .then(resp => {
          commit(RESEARCH_MOVIES_SUCCESS)
          resolve(resp)
        })
        .catch(err => {
          commit(RESEARCH_MOVIES_ERROR)
          reject(err)
        })
    })
  }
}

const mutations = {
  [RESEARCH_MOVIES_REQUEST]: (state, type) => {},
  [RESEARCH_MOVIES_SUCCESS]: (state, type) => {},
  [RESEARCH_MOVIES_ERROR]: (state, type) => {}
}

export default {
  actions,
  mutations
}
