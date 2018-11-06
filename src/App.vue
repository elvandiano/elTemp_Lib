<template>
  <div id="app">
    <v-app id="inspire">
      <!--<app-header/>-->
      <!--<navbar/>-->
        <router-view/>
    </v-app>
  </div>
</template>

<script>
  import AppHeader from './layout/AppHeader'
  import Navbar from './layout/Navbar'

  export default {
    components: {
      AppHeader,
      Navbar
    }
  }
</script>
