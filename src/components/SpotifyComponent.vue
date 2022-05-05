<template>
  <div>
    <SpotifyHeader />
    <SpotifyMain />
  </div>
</template>

<script>
import SpotifyHeader from "@/components/SpotifyHeader.vue";
import SpotifyMain from "@/components/SpotifyMain.vue";

export default {
  name: "SpotifyComponent",
  components: {
    SpotifyHeader,
    SpotifyMain,
  },
};
</script>

<style>
</style>