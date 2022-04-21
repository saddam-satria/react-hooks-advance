import React from 'react';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'PLUS':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

const initialCtx = {
  counter: 0,
  name: 'sarah',
};

const counterContext = React.createContext();

const mainCtx = () => {
  return (
    <counterContext.Provider value={initialCtx}>
      <UseReducerPage />
    </counterContext.Provider>
  );
};

console.log('render');

const UseReducerPage = () => {
  const initialState = React.useContext(counterContext);

  const [state, dispatch] = React.useReducer(counterReducer, initialState);
  const { counter, name } = state;
  return (
    <div>
      <h1>{counter}</h1>
      <h1>{name}</h1>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'PLUS' });
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'CHANGE_NAME', payload: 'John' });
        }}
      >
        change name
      </button>
    </div>
  );
};

export default mainCtx;
