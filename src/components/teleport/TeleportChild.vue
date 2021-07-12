<template>
  <img
    :src="imagePathComputed"
    alt="Teleport child Text"
    :style="{ width: '100%', height: '100%' }"
  />
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    imagePath: String,
    altText: String,
  },
  setup(props) {
    let imagePathComputed = computed(() => {
      return require(`@/assets/${props.imagePath}`);
    });
    return {
      imagePathComputed,
    };
  },
};
</script>
