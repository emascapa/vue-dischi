<template>
  <header class="d-flex align-items-center">
    <img
      src="https://media.pokemoncentral.it/wiki/7/73/Pok%C3%A9_Ball_Sprite_Zaino.png"
      alt="logo"
      class="ms-3"
    />
    <h5 class="ms-3 text-white">Here's a Pokedex made with PokeAPI, vue-dischi at the end eheh</h5>
  </header>
</template>

<script>
export default {
  name: "PokemonHeader",
};
</script>

<style lang="scss" scoped>
header {
  background-color: $card_theme;

  height: 60px;

  img {
    height: 40px;
  }

  h5 {
      margin-bottom: 0;
  }
}
</style>