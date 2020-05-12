<template>
  <div
    class="step-wrapper"
    :class="{
      done: status === 'done',
      in_progress: status === 'in_progress',
      not_started: status === 'not_started'
    }"
  >
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
.done {
  background: red;
}
.in_progress {
  background: blue;
}
.not_started {
  background: greenyellow;
}
</style>
