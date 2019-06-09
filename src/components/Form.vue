<template>
  <v-layout justify-center column>
    <form ref="form" @submit.prevent="research">
      <v-layout row wrap justify-center align-center pa-5 ma-5>
        <v-flex xs12 md3>
          <v-text-field
            v-model="name"
            :counter="10"
            label="Nom du film"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 md2 :ml-5="$vuetify.breakpoint.name !== 'xs' && $vuetify.breakpoint.name !== 'sm'">
          <v-select
            v-model="select"
            :items="years"
            label="Année"
          ></v-select>
        </v-flex>
        <v-flex xs12 md1 :ml-5="$vuetify.breakpoint.name !== 'xs' && $vuetify.breakpoint.name !== 'sm'">
          <v-btn class="primary text-none" :loading="isLoading" type="submit">
            Rechercher
          </v-btn>
        </v-flex>
      </v-layout>
    </form>
  </v-layout>
</template>

<script>
import { MOVIE_INFORMATIONS_REQUEST } from '@/store/movie/actions/movie.actions'

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
    isLoading: false
  }),
  methods: {
    research () {
      this.isLoading = true
      this.$store.dispatch(MOVIE_INFORMATIONS_REQUEST, {title: this.name, year: this.select})
        .then((resp) => this.researchSucceed(resp))
        .catch((error) => this.researchFailed(error))
        .finally(() => {
          this.isLoading = false
        })
    },
    researchSucceed (resp) {
      console.log(resp.data)
      this.$emit('searched', resp.data.Search)

    },
    researchFailed (error) {
      this.isError = true
    }
  },
}
</script>

<style>

</style>
