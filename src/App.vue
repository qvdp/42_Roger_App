<template>
  <v-app dark>

    <!-- Navigation -->
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>IMDb</span>
        <span class="font-weight-light info--text">|search_engine</span>
      </v-toolbar-title>
    </v-toolbar>

    <!-- App content -->
    <v-content>
      <router-view />
    </v-content>

  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
