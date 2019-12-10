<script>
import { provide, ref, watch } from "@vue/composition-api";
import ccSymbol from "../lib/symbol";
import convertBase from "../lib/convertBase";

export default {
  name: "ComosusProvider",
  props: {
    theme: {
      type: Object,
      required: true
    }
  },
  setup({ theme }) {
    let className = 0;
    const classDefinitions = ref([]);
    const styleContainer = ref(document.createElement("style"));
    document.head.appendChild(styleContainer.value);

    watch(() => {
      styleContainer.value.innerText = classDefinitions.value.join(" ");
    });

    provide(ccSymbol, {
      storeClass: classDef => {
        classDefinitions.value.push(classDef);
      },
      nextClass: () => {
        return "c-" + convertBase((++className).toString());
      },
      theme
    });
  },
  render() {
    return this.$slots.default;
  }
};
</script>
