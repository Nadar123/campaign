<template>
  <div class="container">
    <Team
      v-for="team in campaign.team_instances"
      :key="team.team_id"
      :team="team"
    >
      <h3>
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
}
</style>
