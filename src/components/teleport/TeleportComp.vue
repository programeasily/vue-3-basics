<template>
  <div>
    <teleport :to="teleportTo" :disabled="disableTeleport">
      <TeleportChild :imagePath="imagePath" />
    </teleport>
  </div>
</template>

<script>
import TeleportChild from "./TeleportChild.vue";
export default {
  components: {
    TeleportChild,
  },
  props: {
    teleportTo: {
      type: String,
      default: "body",
    },
    imagePath: String,
    disableTeleport: Boolean,
  },
};
</script>
