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
    &:before {
      opacity: 0;
      color: #000;
      content: "\f058";
      font-family: "Font Awesome 5 Free";
      font-style: normal;
      font-weight: normal;
      text-decoration: inherit;
      position: absolute;
      bottom: 15px;
      left: 20%;
      right: 0;
      transition: opacity 0.2s ease-in-out;
      @media only screen and (max-width: 600px) {
        bottom: 19px;
        left: 26%;
      }
    }
  }
  &.in_progress {
    background: #00c1ff;
    &:before {
      opacity: 0;
      color: #000;
      content: "+";
      font-family: "Font Awesome 5 Free";
      font-style: normal;
      font-weight: normal;
      text-decoration: inherit;
      position: absolute;
      bottom: 14px;
      left: 33%;
      right: 0;
      font-size: 20px;
      transition: opacity 0.2s ease-in-out;
      @media only screen and (max-width: 600px) {
        bottom: 18px;
        left: 41%;
      }
    }
  }
  &.not_started {
    background: #d2617087;
    &:before {
      opacity: 0;
      color: #000;
      content: "-";
      font-family: "Font Awesome 5 Free";
      font-style: normal;
      font-weight: normal;
      text-decoration: inherit;
      position: absolute;
      bottom: 6px;
      left: 34%;
      right: 0;
      font-size: 34px;
      transition: opacity 0.2s ease-in-out;
      @media only screen and (max-width: 600px) {
        bottom: 10px;
        left: 42%;
      }
    }
  }
  .status-hover {
    opacity: 0;
    padding: 1rem 2rem;
    text-transform: uppercase;
    position: absolute;
    top: 38px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 14px;
    font-weight: 600;
    transition: opacity 0.4s ease-in-out;
    @media only screen and (max-width: 600px) {
      top: 34px;
    }
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
    &.done,
    &.not_started,
    &.in_progress {
      &::before {
        opacity: 1;
      }
    }
  }
}
</style>
