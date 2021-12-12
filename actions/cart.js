import{
    GET_CART_SUCCESS,
    GET_CART_FAIL,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_FAIL,
    QUANTITY_CHANGE_SUCCESS,
    QUANTITY_CHANGE_FAIL,
} from'./types';
export const getcart = () => async dispatch => {
    try{
        const res = await fetch('/api/cart/getcart',{
            method:'GET',
            headers:{
                'Accept':'application/json',
            }
        });
        const data = await res.json();
        if (res.status === 200) {
            dispatch({
                type: GET_CART_SUCCESS,
                payload:data,
            });
        }else{
            dispatch({
                type: GET_CART_FAIL
            });
        }
    } catch(err){
            dispatch({
                type: GET_CART_FAIL
            });
    }
};


export const add_to_cart = (prodId) => async dispatch => {
    const body = JSON.stringify({
        prodId,
    });
    try{
        const res = await fetch('/api/cart/add',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: body
        });
        if(res.status === 200) {
            dispatch({
                type: ADD_TO_CART_SUCCESS
            });
        } else {
            dispatch({
                type: ADD_TO_CART_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: ADD_TO_CART_FAIL
        });
    }

}
export const remove_from_cart = (prodId) => async dispatch => {
    const body = JSON.stringify({
        prodId,
    });
    try{
        const res = await fetch('/api/cart/remove',{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: body
        });
        if(res.status === 200) {
            dispatch({
                type: REMOVE_FROM_CART_SUCCESS
                
            });
        } else {
            dispatch({
                type: REMOVE_FROM_CART_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: REMOVE_FROM_CART_FAIL
        });
    }

}
export const add_quantity = (prodId) => async dispatch => {
    const body = JSON.stringify({
        prodId,
    });
    try{
        const res = await fetch('/api/cart/add_q',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: body
        });
        if(res.status === 200) {
            dispatch({
                type: QUANTITY_CHANGE_SUCCESS
                
            });
        } else {
            dispatch({
                type: QUANTITY_CHANGE_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: QUANTITY_CHANGE_FAIL
        });
    }

}
export const remove_quantity = (prodId) => async dispatch => {
    const body = JSON.stringify({
        prodId,
    });
    try{
        const res = await fetch('/api/cart/remove_q',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: body
        });
        if(res.status === 200) {
            dispatch({
                type: QUANTITY_CHANGE_SUCCESS
                
            });
        } else {
            dispatch({
                type: QUANTITY_CHANGE_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: QUANTITY_CHANGE_FAIL
        });
    }

}