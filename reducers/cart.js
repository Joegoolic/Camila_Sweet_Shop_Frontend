import {
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,
    GET_CART_SUCCESS,
    GET_CART_FAIL,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_FAIL,
    QUANTITY_CHANGE_SUCCESS,
    QUANTITY_CHANGE_FAIL,
} from '../actions/types';

const initialState = {
    cart: [],
    cartItems:[]
};
const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
    case ADD_TO_CART_SUCCESS:
        return{
            ...state,
        }
    case ADD_TO_CART_FAIL:
        return{
            ...state,
        }
    case GET_CART_SUCCESS:
        return{
            ...state,
            cart: payload.cart,
            cartItems: payload.cartItems
        }
    case GET_CART_FAIL:
        return{
            ...state,
        }
    case REMOVE_FROM_CART_SUCCESS:
        return{
            ...state,
        }
        
    case REMOVE_FROM_CART_FAIL:
        return{
            ...state,
        }
    case QUANTITY_CHANGE_SUCCESS:
        return{
            ...state,
        }
    case QUANTITY_CHANGE_FAIL:
        return{
            ...state,
        }
    default:
        return state;
};
};

export default cartReducer;