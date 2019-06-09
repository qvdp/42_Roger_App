<template>
  <div>
    <movie-form @searched="getResults"/>
    <list :results="list" v-if="list"/>
  </div>
</template>

<script>
  import movieForm from '../components/Form'
  import list from '../components/List'

  export default {
    components: {
      movieForm,
      list
    },
    data () {
      return {
        list: null
      }
    },
    methods: {
      getResults (data) {
        this.list = data
      }
    }
  }
</script>
