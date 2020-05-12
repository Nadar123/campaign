<template>
  <div id="app">
    <Header></Header>
    <TeamBoard :campaign="campaign"></TeamBoard>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import TeamBoard from "./components/TeamBoard";
import { getData } from "./api/api";
export default {
  name: "App",
  components: {
    Header,
    TeamBoard
  },
  data() {
    return {
      campaign: []
    };
  },
  async mounted() {
    try {
      const res = await getData();
      this.campaign = res.data;
    } catch (err) {
      console.log("err", err);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body,
html {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.container {
  width: 1200px;
  margin: auto;
}
</style>
