import themeValue from "../../lib/themeValue";
export default (input, theme) => ({
  color: typeof input === "function" ? input(theme) : themeValue(theme, input)
});
