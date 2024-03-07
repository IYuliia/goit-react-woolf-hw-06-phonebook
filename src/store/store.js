import { createStore } from 'redux';

const reducer = (state, { type, payload }) => {
  //   return type === 'updateNumber'
  //     ? {
  //         ...state,
  //         number: payload,
  //       }
  //     : type === 'createNewUsers'
  //     ? {
  //         ...state,
  //         users: payload,
  //       }
  //     : state;

  switch (type) {
    case 'updateNumber':
      return {
        ...state,
        number: payload,
      };
    case 'createNewUsers':
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, {
  number: 0,
  items: [],
  users: null,
});

store.dispatch({ payload: 1, type: 'updateNumber' });
store.dispatch({ payload: [1, 2, 3], type: 'createNewUsers' });

console.log('store:', store.getState());
