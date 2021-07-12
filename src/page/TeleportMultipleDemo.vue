<template>
  <div id="toPlace"></div>
  <div :style="{ width: '200px', height: '200px' }">
    <button class="btn" @click="onClickBtnA">
      {{ disableTeleportA ? "Move A" : "Come Back A" }}
    </button>
    <button class="btn" @click="onClickBtnB">
      {{ disableTeleportB ? "Move B" : "Come Back B" }}
    </button>
    <TeleportComp
      teleportTo="#toPlace"
      :disableTeleport="disableTeleportA"
      imagePath="logo_transparent.png"
    />
    <TeleportComp
      teleportTo="#toPlace"
      :disableTeleport="disableTeleportB"
      imagePath="vue.png"
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
    let disableTeleportA = ref(true);
    let disableTeleportB = ref(true);
    const onClickBtnA = () => {
      disableTeleportA.value = !disableTeleportA.value;
    };
    const onClickBtnB = () => {
      disableTeleportB.value = !disableTeleportB.value;
    };
    return {
      onClickBtnA,
      onClickBtnB,
      disableTeleportA,
      disableTeleportB,
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
  margin: 2px 2px;
}
.btn:hover {
  background-color: #0417c0;
  color: white;
}
</style>
