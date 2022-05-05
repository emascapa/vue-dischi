<template>
  <main>
    <div class="container py-4">
      <div v-if="!loading" class="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
        <div class="col" v-for="(item, index) in albumList" :key="index">
          <SpotifyCard 
          :cover="item.poster"
          :albumTitle="item.title"
          :band="item.author"
          :year="item.year"
          />
        </div>
      </div>
      <div v-else class="else_div d-flex justify-content-center align-items-center">
        <span>Loading ...</span>
      </div>
    </div>
  </main>
</template>

<script>
import SpotifyCard from "@/components/SpotifyCard.vue";

import axios from "axios";

export default {
  name: "SpotifyMain",
  components: {
    SpotifyCard,
  },
  data() {
    return {
      spotifyLink: 'https://flynn.boolean.careers/exercises/api/array/music',
      albumList: null,
      errorMessage: null,
      loading: true,
      
    };
  },
  mounted() {
    /* axios.get(this.spotifyLink)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));

        console.log('CIAOOOO');
        this.albumList = response.data.response;
        this.loading = false;

        console.log(`eccolo: ${this.albumList}`);
        console.log('ADDIOOOOO');
      })
      .catch(function (error) {
        console.log(error);
        this.errorMessage = error.data;
      }); */
      axios
        .get(this.spotifyLink)
        .then((response) => {

          //console.log('CIAOOOO');

          this.albumList = response.data.response;
          this.loading = false;

          console.log('Spotify ok');

        })
        .catch((error) => {
     
          this.errorMessage = `Sorry There is a problem! ${error}`;
        });
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: $bg_theme;
/* 
  height: calc(100vh - 60px);

  overflow-y: scroll; */

  .else_div {
    color: $light_theme;
    height: calc((100vh - 120px) / 2);
  }
}
</style>

