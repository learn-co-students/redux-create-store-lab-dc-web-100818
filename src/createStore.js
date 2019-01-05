export default function createStore(reducer) {
  let state;

  function getState() {
    console.log(state)
    return state
  }

  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  dispatch({type: "HELLO_HOTDOG"})

  return {
    getState,
    dispatch
  }
}

function render() {
  const container = document.getElementById('container');
}
