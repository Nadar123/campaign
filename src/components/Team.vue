<template>
  <div class="team-single-wrapper">
    <div class="content">
      <slot></slot>
      <Step
        v-for="step in team.steps"
        :key="step.step_id"
        :status="step.status"
      >
        <p class="step-name">
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
  text-align: center;
  width: 40%;
  margin: auto;
  border-radius: 10px;
  margin-top: 4rem;
  padding: 2rem 2rem;
  cursor: pointer;
  box-shadow: 2px 6px 11px rgba(0, 0, 0, 0.2);
  .round {
    border: 1px solid black;
    padding: 1.5rem;
    border-radius: 50%;
    &.download {
      padding: 3rem;
    }
  }
  .step-name {
    position: relative;
    font-size: 16px;
    line-height: 16px;
    transition: transform 0.3s ease-in-out;
  }
}
</style>
