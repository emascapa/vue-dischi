<template>
  <main>
    <div class="container py-4">
      <div
        v-if="!loading_2"
        class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3"
      >
        <div class="col" v-for="item in pokemonList" :key="item.number">
          <div class="pokemon_card text-center p-3 rounded-3">
            <div class="img_div mb-2">
              <img :src="item.image" :alt="item.name" class="img-fluid" />
            </div>
            <span class="d-block">#{{ item.number }}</span>
            <h6 class="pokemon_name text-uppercase">{{ item.name }}</h6>
          </div>
        </div>
      </div>
      <div
        v-else
        class="else_div d-flex justify-content-center align-items-center"
      >
        <span>Loading ...</span>
      </div>
    </div>
  </main>
</template>

<script>
//import PokemonCard from "@/components/PokemonCard.vue";

import axios from "axios";

export default {
  name: "PokemonMain",
  /*   components: {
    PokemonCard,
  }, */
  data() {
    return {
      PokemonLink: "https://pokeapi.co/api/v2/pokemon/",
      pokemonList: [],
      errorMessage: null,
      loading_2: true,
    };
  },
  methods: {
    getPokemon(index) {
      let pokemon = {
        name: null,
        number: null,
        image: null,
      };

      axios
        .get(`${this.PokemonLink}${index}`)
        .then((response) => {
          //console.log("CIAOOOO");

          pokemon.name = response.data.name;
          //console.log(pokemon.name);

          pokemon.number = response.data.id;
          //pokemon.number = index;
          //console.log(pokemon.number);

          pokemon.image = response.data.sprites.front_default;
          //console.log(pokemon.image);

          //this.pokemonList.push(pokemon);

          //console.log(pokemon);
          //console.log(this.pokemonList);
        })
        .catch((error) => {
          this.errorMessage = `Sorry There is a problem! ${error}`;
          return this.errorMessage;
        });

      return pokemon;
    },
  },
  mounted() {
    for (let i = 1; i <= 251; i++) {
      const item = this.getPokemon(i);

      //console.log(item);

      this.pokemonList.push(item);

      //console.log(this.pokemonList);

      if (i === 251) {
        this.loading_2 = false;

        console.log("pokemon ok");

        console.log(this.pokemonList);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: $bg_theme;

  /*   height: calc(100vh - 60px);

  overflow-y: scroll; */

  .pokemon_card {
    background-color: $card_theme;
    height: 100%;
    .img_div {
      //width: 100%;
      //aspect-ratio: 1;
      //overflow: hidden;
    }
    .pokemon_name {
      color: $light_theme;
    }
    span {
      color: $secondary_theme;
    }
  }

  .else_div {
    color: $light_theme;
    height: calc((100vh - 120px) / 2);
  }
}
</style>
