function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}
createStore(candyReducer).dispatch({ type: '@@INIT' });
export default candyReducer;
