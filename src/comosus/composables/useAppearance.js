import { inject } from "@vue/composition-api";
import ccSymbol from "../lib/symbol";
import applyContext from "../lib/applyContext";
import applyConditions from "../lib/applyConditions";
import buildClassDefinition from "../lib/buildClassDefinition";
import contexts from "../contexts";
export default (config, className = "") => {
  const cc = inject(ccSymbol);

  if (className === "") {
    className = cc.nextClass();
  }

  let conditionsMap = {};
  for (const contextName in config) {
    if (contexts[contextName]) {
      conditionsMap = {
        ...conditionsMap,
        ...applyContext(contexts[contextName], config[contextName], cc.theme)
      };
    } else {
      console.warn(`Unknown Context "${contextName}"`);
    }
  }

  for (const [conditionString, styles] of Object.entries(conditionsMap)) {
    (conditionString === "default"
      ? [`.${className}`]
      : applyConditions(conditionString, `.${className}`)
    ).forEach(selector => {
      cc.storeClass(buildClassDefinition(selector, styles));
    });
  }

  return className;
};
