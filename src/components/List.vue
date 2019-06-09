<template>
  <v-layout justify-center>
    <v-flex xs12 sm6>
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex v-for="movie, index in results" :key="movie.Title" v-bind="{ [`xs${index % 3 === 0 ? 12 : 6}`]: true }">
              <v-card>
                <v-img :src="movie.Poster" :lazy-src="`https://picsum.photos/10/6?image=200`" height="200px">
                  <v-container column fill-height pa-2>
                    <v-layout fill-height>
                      <v-flex xs12>
                        <span class="headline white--text grey" v-text="movie.Title"></span>
                        <small class="white--text" v-text="movie.imdbID"></small>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    voir
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'List',
  props: {
    results: {
      type: Array
    }
  }
}
</script>

<style>

</style>
