<template>
  <div>
    <textarea
      v-model="value"
      rows="3"
      cols="3"
      class="input"
      :placeholder="placeHolderLabel"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeHolderLabel: {
      type: String,
      default: "Enter the value",
    },
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style scoped>
.input {
  width: 200px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
