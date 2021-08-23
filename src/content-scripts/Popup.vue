<script>
import { defineComponent, ref, onMounted, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const visible = ref(false);

    const state = reactive({
      currentTab: null
    });

    onMounted(() => {
      chrome.runtime.sendMessage({ type: "POPUP_INIT" }, async tab => {
        state.currentTab = await tab;
        console.log(state.currentTab);
      });
    });

    return {
      visible,
      ...toRefs(state)
    };
  }
});
</script>
<template>
  <div class="overlay" v-show="visible">
    <div class="popup">
      <h1>Legen...wait for it..dary</h1>
      <pre>{{ currentTab }}</pre>
    </div>
  </div>
</template>

<style>
.overlay {
  @apply fixed inset-0 w-full h-full bg-black bg-opacity-10 z-50;
}

.popup {
  @apply absolute top-4 right-4 bg-white shadow-lg p-4 rounded-md w-72;
}
</style>
