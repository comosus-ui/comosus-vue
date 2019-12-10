import themeValue from "../../lib/themeValue";
export default (input, theme) => ({
  "font-weight":
    typeof input === "function" ? input(theme) : themeValue(theme, input)
});
