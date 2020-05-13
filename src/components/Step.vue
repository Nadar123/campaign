<template>
  <div
    class="step-wrapper"
    :class="{
      done: status === 'done',
      in_progress: status === 'in_progress',
      not_started: status === 'not_started'
    }"
  >
    <span class="status-hover">
      {{ status }}
    </span>
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: "Step",
  props: ["status"]
};
</script>

<style lang="scss" scoped>
.step-wrapper {
  position: relative;
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 1.5rem 0;
  transition: all 0.4s ease-in;
  &.done {
    background: #00ffaf;
  }
  &.in_progress {
    background: #00c1ff;
  }
  &.not_started {
    background: #d2617087;
  }
  .status-hover {
    opacity: 0;
    padding: 1rem 2rem;
    text-transform: uppercase;
    position: absolute;
    top: 51px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 14px;
    font-weight: 600;
    transition: opacity 0.4s ease-in-out;
  }
  &:hover {
    opacity: 0.9;
    .status-hover {
      opacity: 1;
      z-index: 9;
    }
    .step-name {
      transform: translate(0px, -40%);
    }
  }
}
</style>
