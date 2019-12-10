<template>
  <div id="app">
    <ComosusProvider :theme="theme">
      <SceneButton />
    </ComosusProvider>
  </div>
</template>

<script>
import SceneButton from "./components/SceneButton.vue";
import { ComosusProvider } from "./comosus";
import theme from "./theme";

export default {
  name: "app",
  components: {
    ComosusProvider,
    SceneButton
  },
  data() {
    return {
      theme
    };
  }
};
</script>
