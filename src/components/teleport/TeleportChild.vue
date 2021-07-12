<template>
  <img
    :src="imagePath"
    alt="Teleport child Text"
    :style="{ width: '100%', height: '100%' }"
  />
</template>

<script>
export default {
  props: {
    imagePath: String,
    altText: String,
  },
};
</script>
