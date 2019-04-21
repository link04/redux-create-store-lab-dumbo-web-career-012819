function countReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1;
    case 'DECREMENT_COUNT':
      return state - 1;
    default:
      return state;
  }
}
createStore(candyReducer).dispatch({ type: '@@INIT' });
createStore(countReducer).dispatch({ type: '@@INIT' });

export default countReducer;
