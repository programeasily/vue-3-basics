<template>
<ComputedGetSample firstName="Eric" lastName="Thomas" />
</template>

<script>
import ComputedGetSample from './components/ComputedGetSample'
export default {
  name: "App",
  components: {
    ComputedGetSample
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
