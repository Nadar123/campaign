<template>
  <div id="app">
    <Header></Header>
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12">
            <TeamBoard :campaign="campaign"></TeamBoard>
          </div>
        </div>
      </div>
    </section>
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
  @media only screen and (max-width: 600px) {
    overflow-x: hidden;
  }
}
.container {
  width: 1200px;
  margin: auto;
  @media only screen and (max-width: 600px) {
    width: 600px;
    margin: auto;
  }
}
</style>
