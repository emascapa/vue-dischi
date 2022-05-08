<template>
  <header class="d-flex align-items-center">
    <img src="@/assets/img/spotify-logo.png" alt="logo" class="" />
    <div class="search_div d-flex align-items-center">
      <SpotifySelect v-model="inputValue" @changeSearchCriteria="switchFunc" />
      <SpotifySearch v-model="inputSearch" @submitForm="searchFunc" />
    </div>
  </header>
</template>

<script>
import state from "@/state.js";
import SpotifySelect from "@/components/SpotifySelect.vue";
import SpotifySearch from "@/components/SpotifySearch.vue";

export default {
  name: "SpotifyHeader",
  components: {
    SpotifySelect,
    SpotifySearch,
  },
  data() {
    return {
      inputValue: "",
      inputSearch: "",
    };
  },
  methods: {
    switchFunc() {
      console.log(`hai selezionato ${this.inputValue}`);

      console.log(
        `variabile observable SELECT prima: ${state.observableSpotifySelect}`
      );

      //passo alla variabile observable l'input inserito
      state.observableSpotifySelect = this.inputValue;

      console.log(
        `variabile observable SELECT dopo: ${state.observableSpotifySelect}`
      );
    },

    searchFunc() {
      console.log(`hai scritto ${this.inputSearch}`);

      console.log(
        `variabile observable prima: ${state.observableSpotifySearch}`
      );

      //passo alla variabile observable l'input inserito
      state.observableSpotifySearch = this.inputSearch;

      console.log(
        `variabile observable dopo: ${state.observableSpotifySearch}`
      );
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: $card_theme;
  justify-content: center;

  padding: 0 0.5rem;

  height: 60px;
  width: 100%;

  img {
    height: 40px;
    display: none;
  }

  .search_div {
    width: 90%;
    justify-content: center;
  }
}

@media screen and (min-width: 576px) {
  header {
    justify-content: space-between;

    padding: 0 1rem;

    img {
      display: block;
    }

    .search_div {
      width: 50%;
      justify-content: end;
      //margin-right: 0.5rem;
    }
  }
}
</style>