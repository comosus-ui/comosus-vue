export default input =>
  input === true
    ? {
        overflow: "hidden",
        "text-overflow": "ellipsis",
        "white-space": "nowrap"
      }
    : {};
