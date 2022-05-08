<template>
  <header class="d-flex align-items-center">
    <img
      src="https://media.pokemoncentral.it/wiki/7/73/Pok%C3%A9_Ball_Sprite_Zaino.png"
      alt="logo"
      class=""
    />
    <div class="search_div d-flex align-items-center">
      <PokemonSelect v-model="inputValue" @changeSearchCriteria="switchFunc" />
      <PokemonSearch v-model="inputSearch" @submitForm="searchFunc" />
    </div>
  </header>
</template>

<script>
import state from "@/state.js";
import PokemonSelect from "@/components/PokemonSelect.vue";
import PokemonSearch from "@/components/PokemonSearch.vue";

export default {
  name: "PokemonHeader",
  components: {
    PokemonSelect,
    PokemonSearch,
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
        `variabile observable SELECT prima: ${state.observablePokemonSelect}`
      );

      //passo alla variabile observable l'input inserito
      state.observablePokemonSelect = this.inputValue;

      console.log(
        `variabile observable SELECT dopo: ${state.observablePokemonSelect}`
      );
    },

    searchFunc() {
      console.log(`hai scritto ${this.inputSearch}`);

      console.log(
        `variabile observable prima: ${state.observablePokemonSearch}`
      );

      //passo alla variabile observable l'input inserito
      state.observablePokemonSearch = this.inputSearch;

      console.log(
        `variabile observable dopo: ${state.observablePokemonSearch}`
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