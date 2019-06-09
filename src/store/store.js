import Vue from 'vue'
import Vuex from 'vuex'

// Movie section
import getMovieInformations from './movie/researchMovies'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    getMovieInformations
  },
  strict: debug
})
