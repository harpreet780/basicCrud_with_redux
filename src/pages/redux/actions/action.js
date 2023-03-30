export const ADD_INPUT_VALUE = 'ADD_INPUT_VALUE';
export const ADD_LIST = 'ADD_LIST';
export const CLEAR_ALL_DATA = 'CLEAR_ALL_DATA';
export const IS_COMPLETE = 'IS_COMPLETE';


export const toExpression = (type, payload) => ({
    type,
    payload
  });

export const addInputValue = (addvalue)=> toExpression(ADD_INPUT_VALUE, addvalue);
export const addFileds = (add)=> toExpression(ADD_LIST, add);
export const clearInputData = (clear)=> toExpression(CLEAR_ALL_DATA, clear);
export const handleCompleteState = (update)=> toExpression(IS_COMPLETE, update);