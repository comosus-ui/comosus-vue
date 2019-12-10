import normalizeInput from "./normalizeInput";

export default function(context, config, theme) {
  const contextConditionsMap = {};

  for (const propName in config) {
    if (context[propName]) {
      const normalizedPropertyConfig = normalizeInput(config[propName]);
      for (const condition in normalizedPropertyConfig) {
        contextConditionsMap[condition] = {
          ...(contextConditionsMap[condition] || {}),
          ...context[propName](normalizedPropertyConfig[condition], theme)
        };
      }
    } else {
      console.warn(`Unknown prop "${propName}"`);
    }
  }

  return contextConditionsMap;
}
