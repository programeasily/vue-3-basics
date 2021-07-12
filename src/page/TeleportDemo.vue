<template>
  <div id="toPlace"></div>
  <div :style="{ width: '200px', height: '200px' }">
    <button class="btn" @click="onClickBtn">
      {{ disableTeleport ? "Move to toPlace" : "Come Back" }}
    </button>
    <TeleportComp
      teleportTo="#toPlace"
      imagePath="logo_transparent.png"
      :disableTeleport="disableTeleport"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import TeleportComp from "../components/teleport/TeleportComp.vue";
export default {
  components: {
    TeleportComp,
  },
  setup() {
    let disableTeleport = ref(true);
    const onClickBtn = () => {
      disableTeleport.value = !disableTeleport.value;
    };
    return {
      onClickBtn,
      disableTeleport,
    };
  },
};
</script>
<style scoped>
#toPlace {
  width: 200px;
  height: 200px;
  margin: auto;
  display: flex;
  justify-content: center;
}
.btn {
  background-color: #4999f5;
  border: none;
  color: white;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
.btn:hover {
  background-color: #0417c0;
  color: white;
}
</style>
