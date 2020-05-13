<template>
  <div>
    <nav class="header">
      <h1>Scenario Visualization</h1>
      <h3>Campaign Name</h3>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  height: 56px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: #173c52;
  padding: 0 20px;
  color: #fff;
  h1,
  h3 {
    margin-block-start: 0;
    margin-block-end: 0;
    transition: color 0.2 ease-in-out;
    &:hover {
      color: #ccc;
    }
    @media only screen and (max-width: 600px) {
      font-size: 18px;
    }
  }
}
</style>
