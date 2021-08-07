<template>
  <div id="app">
    <div class="container">
      <Header />
    </div>
    <Intro />
    <div class="container">
      <Advantage />
    </div>
    <Offer />
    <div class="container">
      <Sponsor />
      <Card />
      <Support />
    </div>
    <Contact />
    <div class="container">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Intro from './components/Intro.vue'
import Advantage from './components/Advantage.vue'
import Offer from './components/Offer.vue'
import Sponsor from './components/Sponsor.vue'
import Card from './components/Card.vue'
import Support from './components/Support.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header, Intro, Advantage, Offer, Sponsor, Card, Support, Contact, Footer
  },
  data () {
    return {
      arr: [
        {
          title: 'Installs',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'

        }
      ]
    }
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
