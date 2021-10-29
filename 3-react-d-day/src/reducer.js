const dayReducer = (state, action) => {
  const date = state.date;
  switch (action.type) {
    case "DATE":
      date.setDate(action.value);
      break;
    case "MONTH":
      date.setMonth(action.value - 1);
      break;
    case "YEAR":
      date.setYear(action.value);
      break;
    case "TODAY":
      const today = new Date();
      date.setDate(today.getDate());
      date.setMonth(today.getMonth());
      date.setYear(today.getFullYear());
      break;
    default:
      break;
  }
  console.log(date.getFullYear(), date.getMonth());
  return { date };
};

export default dayReducer;
