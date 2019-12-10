const PropertyInterpreter = require("../../../classes/PropertyInterpreter");
const GetThemeValue = require("../../../lib/GetThemeValue");

module.exports = new PropertyInterpreter("padding", (input, theme) => {
  const type = typeof input;

  if (type === "function") {
    return {
      padding: input(theme)
    };
  } else if (type === "string") {
    return {
      padding: GetThemeValue(theme, input)
    };
  } else if (type === "object") {
    const topConfig = input.top || input.y || input.all;
    const bottomConfig = input.bottom || input.y || input.all;
    const leftConfig = input.left || input.x || input.all;
    const rightConfig = input.right || input.x || input.all;

    const topValue =
      typeof topConfig === "function"
        ? topConfig(theme)
        : GetThemeValue(theme, topConfig);
    const bottomValue =
      typeof bottomConfig === "function"
        ? bottomConfig(theme)
        : GetThemeValue(theme, bottomConfig);
    const leftValue =
      typeof leftConfig === "function"
        ? leftConfig(theme)
        : GetThemeValue(theme, leftConfig);
    const rightValue =
      typeof rightConfig === "function"
        ? rightConfig(theme)
        : GetThemeValue(theme, rightConfig);

    const value = [
      topValue,
      ...(rightValue !== topValue ||
      bottomValue !== topValue ||
      leftValue !== rightValue
        ? [rightValue]
        : []),
      ...(bottomValue !== topValue || leftValue !== rightValue
        ? [bottomValue]
        : []),
      ...(leftValue !== rightValue ? [leftValue] : [])
    ].join(" ");

    return {
      padding: value
    };
  }
});
