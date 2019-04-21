
export default function createStore(reducer) {
  let state;

  const dispatch = (action) => {
    state = reducer(action, state);
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

