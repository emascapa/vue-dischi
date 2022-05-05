<template>
  <header class="d-flex align-items-center">
      <img src="@/assets/img/spotify-logo.png" alt="logo" class="ms-3">
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

    height: 60px;

    img {
        height: 40px;
    }
}


</style>