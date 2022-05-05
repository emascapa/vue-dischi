<template>
  <div id="app">
    <Pokemon />
    <Spotify />
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue'*/
import Spotify from "@/components/SpotifyComponent.vue";
import Pokemon from "@/components/PokemonComponent.vue";

export default {
  name: "App",
  components: {
    Pokemon,
    Spotify,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
