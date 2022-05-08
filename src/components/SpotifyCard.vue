<template>
  <div class="spotify_card text-center p-3 rounded-3">
    <div class="img_div mb-2">
      <img :src="cover" :alt="albumTitle" class="img-fluid" />
    </div>
    <h6 class="album_title text-uppercase">{{ albumTitle }}</h6>
    <span class="d-block">{{ band }}</span>
    <span class="d-block">{{ year }}</span>
  </div>
</template>

<script>
export default {
  name: "SpotifyCard",
  props: {
    cover: String,
    albumTitle: String,
    band: String,
    year: String,
  },
};
</script>

<style lang="scss" scoped>
.spotify_card {
  background-color: $card_theme;
  height: 100%;
  .img_div {
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
  }
  .album_title {
    color: $light_theme;
  }
  span {
    color: $secondary_theme;
  }
}
</style>