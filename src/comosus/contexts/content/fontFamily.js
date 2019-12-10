import themeValue from "../../lib/themeValue";
export default (input, theme) => ({
  "font-family":
    typeof input === "function" ? input(theme) : themeValue(theme, input)
});
