
export default function createStore(reducer) {
  let state;

  const dispatch = (action) => {
    state = reducer(state, action);
    render();
  }

  const getState = () => {
    return state
  }

  return {getState, dispatch}
}

function render() {
  const container = document.getElementById('container');
}

createStore(candyReducer).dispatch({ type: '@@INIT' });
createStore(countReducer).dispatch({ type: '@@INIT' });

