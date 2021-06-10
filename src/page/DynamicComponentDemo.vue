<template>
  <h1>Simple Cloning Component Example</h1>
  <div class="grp">
    <dcButton label="Add Input" @click="addInput" />
    <dcButton label="Add Text Area" @click="addTextArea" />
  </div>
  <dynamicComp
    v-for="(item, index) in items"
    :key="index"
    :componentName="item.componentName"
    :componentProps="item.componentProps"
  >
  </dynamicComp>
</template>

<script>
import { ref } from "@vue/reactivity";
import dynamicComp from "../components/dynamic-comp/DynamicComp.vue";
import dcButton from "../components/dynamic-comp/DcButton.vue";
export default {
  components: {
    dynamicComp,
    dcButton,
  },
  setup() {
    let items = ref([]);
    const addInput = () => {
      items.value.push({
        componentName: "dcInput",
        componentProps: {
          placeHolderLabel: "Cloning Input",
        },
      });
    };
    const addTextArea = () => {
      items.value.push({
        componentName: "dcTextArea",
        componentProps: {
          placeHolderLabel: "Cloning Text Arae",
        },
      });
    };
    return {
      items,
      addInput,
      addTextArea,
    };
  },
};
</script>

<style scoped>
.grp {
  padding-left: 408px;
}
</style>
