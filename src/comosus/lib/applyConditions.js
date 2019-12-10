import * as Conditions from "../conditions";

const conditionMap = Object.values(Conditions).reduce((out, condition) => {
  out[condition.code] = condition.apply;
  return out;
}, {});

export default function(conditions, selector) {
  return conditions.split(/-/g).map(conditionSet => {
    return conditionSet.match(/.{1,2}/g).reduce((out, code) => {
      if (conditionMap[code]) {
        out = conditionMap[code](out);
      } else {
        console.warn(`Unrecognized condition code "${code}"`);
      }
      return out;
    }, selector);
  });
}
