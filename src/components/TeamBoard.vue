<template>
  <div class="container">
    <Team
      v-for="team in campaign.team_instances"
      :key="team.team_id"
      :team="team"
    >
      <h3 class="title">
        {{ team.team_name }}
      </h3>
    </Team>
  </div>
</template>

<script>
import Team from "@/components/Team.vue";

export default {
  name: "TeamBoard",
  components: {
    Team
  },
  props: ["campaign"],
  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: auto;
  h3.title {
    display: inline-block;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: lightsteelblue;
    line-height: 2rem;
    padding: 0.5rem;

    &:after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: rgba(0, 0, 0, 0.2);
      transition: width 0.3s;
      position: absolute;
      bottom: 0;
      right: 0;
    }
    &:hover:after {
      width: 100%;
      margin: auto;
    }
  }
}
</style>
