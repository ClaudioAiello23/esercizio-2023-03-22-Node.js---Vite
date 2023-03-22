<!-- PARTE VUE JS-->
<script>
import AppTitle from './components/AppTitle.vue'; // import dei files dalla cartella components
import AppHero from './components/AppHero.vue'; // import dei files dalla cartella components

export default {
  components: {
    AppTitle, // aggiunta files dall'oggetto components 
    AppHero,  // aggiunta files dall'oggetto components
  }
}
</script>

<!-- PARTE HTML -->
<template>
  <AppTitle />
  <AppHero />
</template>
