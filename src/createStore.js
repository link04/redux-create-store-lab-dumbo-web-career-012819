
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

let store = createStore(changeCount) // createStore takes the changeCount reducer as an argument
store.dispatch({ type: '@@INIT' });
