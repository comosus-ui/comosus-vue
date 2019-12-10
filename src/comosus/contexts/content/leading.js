import themeValue from "../../lib/themeValue";
export default (input, theme) => ({
  "line-height":
    typeof input === "function" ? input(theme) : themeValue(theme, input)
});
