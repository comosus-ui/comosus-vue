<template>
  <button :class="buttonClass">
    <span :class="gradientClass" />
    <span>
      <span>Zen</span>
      <span>Living Room</span>
    </span>
  </button>
</template>

<script>
import { useAppearance, when } from "../comosus";
import { Hover } from "../comosus/conditions";

export default {
  name: "SceneButton.vue",
  setup() {
    console.time("use appearance");
    const buttonClass = useAppearance({
      content: {
        color: {
          default: "colors.blue.90",
          [when(Hover)]: "colors.blue.20"
        },
        fontFamily: () => "sans-serif",
        fontWeight: "fontWeight.regular"
      }
    });

    const gradientClass = useAppearance({
      content: {
        color: "colors.grey.10"
      }
    });

    console.timeEnd("use appearance");

    return {
      buttonClass,
      gradientClass
    };
  }
};
</script>
