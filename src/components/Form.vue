<template>
  <v-layout column wrap justify-center column>
    <form ref="form" @submit.prevent="research">
      <v-layout row wrap justify-center align-center pa-5 ma-5>
        <v-flex xs12 md3>
          <v-text-field
            v-model="name"
            label="Movie title"
            required
            clearable
          ></v-text-field>
        </v-flex>
        <v-flex xs12 md2 :ml-5="$vuetify.breakpoint.name !== 'xs' && $vuetify.breakpoint.name !== 'sm'">
          <v-select
            v-model="select"
            :items="years"
            label="Year"
            clearable
          ></v-select>
        </v-flex>
        <v-flex xs12 md1 :ml-5="$vuetify.breakpoint.name !== 'xs' && $vuetify.breakpoint.name !== 'sm'">
          <v-btn large class="warning text-none" :loading="isLoading" type="submit" block>
            Research
          </v-btn>
        </v-flex>
      </v-layout>
    </form>

    <v-divider class="ml-5 mr-5 mb-5 pb-5 pl-5 pr-5"></v-divider>

    <v-layout row-wrap justify-center text-xs-center>

      <v-flex xs12 md6 text-xs-center>
        <v-card :key="page">
          <v-layout row wrap>
            <v-flex v-for="movie, index in results" :key="movie.imdbID" v-bind="{ [`xs${index % 3 === 0 ? 12 : 6}`]: true }" class="pt-2">
              <v-card height="100%">
                <v-img :src="movie.Poster ? movie.Poster : 'https://picsum.photos/10/6?image=200'" height="200px" :cover="index % 3 === 0" :contain="index % 3 !== 0">
                </v-img>
                <v-card-actions>
                  <v-layout column justify-center text-xs-center fill-height pa-2>
                      <a><span class="headline white--text" v-text="movie.Title" @click="openLink(movie.imdbID)"></span></a>
                      <small class="white--text" v-text="movie.Year"></small>
                      <small class="grey--text" v-text="movie.imdbID"></small>
                      <v-btn large flat color="warning" class="text-none mt-2" @click="openLink(movie.imdbID)">
                        Details
                      </v-btn>
                  </v-layout>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs12 text-xs-center v-if="maxPage">
              <v-pagination
                v-model="page"
                :length="maxPage"
                :total-visible="7"
                @input="research"
              ></v-pagination>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>

    </v-layout>
  </v-layout>
</template>

<script>
import { RESEARCH_MOVIES_REQUEST } from '@/store/movie/actions/movie.actions'

export default {
  name: 'SearchEngine',
  data: () => ({
    name: '',
    select: '',
    years: [
      '2019',
      '2018',
      '2017',
      '2016'
    ],
    results: null,
    page: 1,
    maxPage: null,
    isLoading: false
  }),
  methods: {
    research () {
      this.isLoading = true
      this.$store.dispatch(RESEARCH_MOVIES_REQUEST, { title: this.name, year: this.select, page: this.page })
        .then((resp) => this.researchSucceed(resp))
        .catch((error) => this.researchFailed(error))
        .finally(() => {
          this.isLoading = false
        })
    },
    researchSucceed (resp) {
      console.log('success')
      this.results = resp.data.Search
      this.maxPage = Math.floor(resp.data.totalResults / 10)
    },
    researchFailed (error) {
      this.isError = true
    },
    openLink (id) {
      let win = window.open('https://www.imdb.com/title/' + id, '_blank')
      win.focus();
    }
  },
}
</script>

<style>

</style>
