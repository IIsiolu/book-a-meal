import instance from '../utils/instance';
import * as actionTypes from './actionsTypes';

const addToOrder = meal => ({
  type: actionTypes.ADD_TO_ORDER,
  payload: meal,
});
const createdOrder = menu => ({
  type: actionTypes.ORDER_CREATED,
  payload: menu,
});
const orderError = error => ({
  type: actionTypes.ORDER_ERROR,
  payload: error,
});
const removeAnOrder = meal => ({
  type: actionTypes.REMOVE_AN_ORDER,
  payload: meal,
});
export const addMealToOrder = meal => (dispatch) => {
  // console.log('meal image', meal);
  const mealData = {
    mealId: meal.id,
    name: meal.name,
    quantity: 1,
    mealImg: meal.image,
    mealCost: meal.price,
  };
  return dispatch(addToOrder(mealData));
};
export const removeOrder = mealId => (dispatch) => {
  dispatch(removeAnOrder(mealId));
};
export const clearOrder = () => (dispatch) => {
  dispatch({
    type: actionTypes.CLEAR_ORDER,
  });
};
export const increaseQuantity = (mealId, quantity) => dispatch => (
  quantity > 0 ?
    dispatch({
      type: actionTypes.INCREASE_MEAL_QUANTITY,
      payload: { mealId, quantity },
    }) : ''
);
export const successState = bool => dispatch => (
  dispatch({
    type: actionTypes.CHANGE_ORDER_SUC_STATE,
    payload: bool,
  })
);

export const errState = bool => dispatch => (
  dispatch({
    type: actionTypes.CHANGE_ORDER_ERR_STATE,
    payload: bool,
  })
);

export const requestForOrder = orders => (dispatch) => {
  console.log('>>>>>>> orders', orders);
  return (
    instance.post('orders', { orders }).then((res) => {
      console.log(res.data);
      dispatch(createdOrder(res.data.data));
    }).catch((error) => {
      let myError = null;
      console.log(error.response);
      if (error.response) {
        myError = (error.response.data.errorMessage) ? error.response.data.errorMessage[0] : error.response.data;
        dispatch(orderError(myError));
      } else {
        myError = 'poor internet connection';
        dispatch(orderError(myError));
      }
    })
  );
};