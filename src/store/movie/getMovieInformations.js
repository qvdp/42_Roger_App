import API from '@/utils/http-constant'
import {
  MOVIE_INFORMATIONS_REQUEST,
  MOVIE_INFORMATIONS_SUCCESS,
  MOVIE_INFORMATIONS_ERROR
} from './actions/movie.actions'

const actions = {
  [MOVIE_INFORMATIONS_REQUEST]: ({ commit, dispatch }, data) => {
    return new Promise((resolve, reject) => {
      commit(MOVIE_INFORMATIONS_REQUEST)
      API({
        method: 'POST',
        url: '&type=movie&s=' + data.title + (data.year ? '&y=' + data.year : '')
      })
        .then(resp => {
          commit(MOVIE_INFORMATIONS_SUCCESS)
          resolve(resp)
        })
        .catch(err => {
          commit(MOVIE_INFORMATIONS_ERROR)
          reject(err)
        })
    })
  }
}

const mutations = {
  [MOVIE_INFORMATIONS_REQUEST]: (state, type) => {},
  [MOVIE_INFORMATIONS_SUCCESS]: (state, type) => {},
  [MOVIE_INFORMATIONS_ERROR]: (state, type) => {}
}

export default {
  actions,
  mutations
}
