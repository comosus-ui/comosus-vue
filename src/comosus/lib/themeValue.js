export default (theme, path) => {
  // TODO add `suggestions` parameter for shorthand values
  return path.split(/\./).reduce((out, part) => out[part], theme);
};
