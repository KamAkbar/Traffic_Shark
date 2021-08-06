<template>
  <div id="app">
    <div class="container">
      <Header />
    </div>
    <Intro />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Intro from './components/Intro.vue'

export default {
  name: 'App',
  components: {
    Header, Intro
  }
}
</script>

<style lang="scss">
@import url("./assets/css/bootstrap-grid.css");
@import url("./assets/css/bootstrap-grid.min.css");

//Fonts
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color: inherit;
}
</style>
