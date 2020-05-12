<template>
  <div>
    <div class="content">
      <slot></slot>
      <Step
        v-for="step in team.steps"
        :key="step.step_id"
        :status="step.status"
      >
        <p>
          {{ step.step_name }}
        </p>
      </Step>
    </div>
  </div>
</template>

<script>
import Step from "@/components/Step.vue";
export default {
  name: "Team",
  components: {
    Step
  },
  props: ["team"]
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 4rem;
  padding: 2rem 2rem;
  .round {
    border: 1px solid black;
    padding: 1.5rem;
    border-radius: 50%;
    &.download {
      padding: 3rem;
    }
  }
}
</style>
