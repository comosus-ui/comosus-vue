export default function(selector, styles) {
  return `${selector} { ${Object.entries(styles).reduce(
    (out, [prop, val]) => out + `${prop}:${val};`,
    ""
  )} }`;
}
