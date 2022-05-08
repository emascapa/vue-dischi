<template>
  <main>
    <div class="container py-4">
      <div
        v-if="!loading && filteredSpotifyItems.length > 0"
        class="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3"
      >
        <!-- <div class="col" v-for="(item, index) in albumList" :key="index"> -->
        <div
          class="col"
          v-for="(item, index) in filteredSpotifyItems"
          :key="index"
        >
          <SpotifyCard
            :cover="item.poster"
            :albumTitle="item.title"
            :band="item.author"
            :year="item.year"
          />
        </div>
      </div>
      <div
        v-else-if="!loading && filteredSpotifyItems.length == 0"
        class="else_div d-flex justify-content-center align-items-center"
      >
        <span>No result match</span>
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
import state from "@/state.js";
import SpotifyCard from "@/components/SpotifyCard.vue";

import axios from "axios";

export default {
  name: "SpotifyMain",
  components: {
    SpotifyCard,
  },
  data() {
    return {
      spotifyLink: "https://flynn.boolean.careers/exercises/api/array/music",
      albumList: null,
      errorMessage: null,
      loading: true,
    };
  },
  mounted() {
    axios
      .get(this.spotifyLink)
      .then((response) => {
        //console.log('CIAOOOO');

        this.albumList = response.data.response;
        this.loading = false;

        console.log("Spotify ok");
      })
      .catch((error) => {
        this.errorMessage = `Sorry There is a problem! ${error}`;
      });
  },
  computed: {
    filteredSpotifyItems() {
      //cancella
      console.log(`array spotify:`);
      console.log(this.albumList);

      console.log(`primo elemento dell'array spotify:`);
      console.log(this.albumList[0]);

      console.log(`chiave del primo elemento dell'array spotify:`);
      console.log(this.albumList[0].title);

      return this.albumList.filter((item) => {
        if (state.observableSpotifySelect == "1") {
          return item.title
            .toLowerCase()
            .includes(state.observableSpotifySearch.toLowerCase());
        } else if (state.observableSpotifySelect == "2") {
          return item.author
            .toLowerCase()
            .includes(state.observableSpotifySearch.toLowerCase());
        } else if (state.observableSpotifySelect == "3") {
          return item.year
            .toLowerCase()
            .includes(state.observableSpotifySearch.toLowerCase());
        } else {
          return item.genre
            .toLowerCase()
            .includes(state.observableSpotifySearch.toLowerCase());
        }
      });
    },
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

