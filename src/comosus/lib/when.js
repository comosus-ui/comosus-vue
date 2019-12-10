export default (...conditionSets) =>
  conditionSets
    .map(conditionSet =>
      (Array.isArray(conditionSet) ? conditionSet : [conditionSet])
        .map(condition => condition.code)
        .join()
    )
    .join();
