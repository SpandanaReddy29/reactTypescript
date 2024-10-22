import React, {useReducer} from 'react';

type CounterState = {
  count: number
}
//Decremenated Unions which is suitable for reducer hooks
type UpdateAction = {
  type: 'increment' | 'decrement',
  payload: number
}
type ResetAction = {
  type: 'reset'
}
type CounterAction = UpdateAction | ResetAction;
// type CounterAction = {
//   // type: string,
//   type: 'increment' | 'decrement' | 'reset',
//   payload: number
// }

const initialSatate = {
  count: 0
};

function reducer(state: CounterState, action: CounterAction) {
  switch(action.type){
    case 'increment':
      return {count: state.count + action.payload}
    case 'decrement':
      return {count: state.count - action.payload}
    case 'reset':
      return initialSatate
    default:
      return state
  }
}

const UseReducerHook = () => {

  const [state, dispatch] = useReducer(reducer, initialSatate)

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })} >
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })} >
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: 'reset'})} >Reset</button>
    </div>
  )
}

export default UseReducerHook