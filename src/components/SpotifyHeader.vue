<template>
  <header class="p-2">
      <img src="@/assets/img/spotify-logo.png" alt="">
  </header>
</template>

<script>
export default {
    name: 'SpotifyHeader'

}
</script>

<style lang="scss" scoped>

header {
    background-color: $card_theme;

    img {
        height: 30px;
    }
}


</style>