import { useEffect,useState} from 'react';
import Link from 'next/link';
import {useSelector, useDispatch} from 'react-redux';
import { getcart,remove_from_cart,add_quantity,remove_quantity } from "../../actions/cart";
import {API_URL} from '../../config/index';
import Styles from '@/styles/cart.module.scss';
import {AiFillPlusCircle ,AiFillMinusCircle} from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import Modal from '@/components/Modal';
import 'react-toastify/dist/ReactToastify.css'

function Cart(){
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const cart = useSelector(state => state.cart.cart);
  const cartItems = useSelector(state => state.cart.cartItems);
  const [showModal, setShowModal] = useState(false);
  let ds = '$'


  useEffect(() => {
    const timer = setTimeout(() => {
      if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(getcart());
    }, 1);
    return () => clearTimeout(timer);
    },[dispatch]);

    const CartRemove = (cartitem,cart) => {
      let prodId = cartitem.id;
      console.log(prodId);
      if (dispatch && dispatch !== null && dispatch !== undefined) {
        dispatch(remove_from_cart(prodId));
        const ele = document.getElementById(prodId+'all');
        ele.remove();

        //Changes total items
        const total_items = document.getElementById('total_items')
        const total_item_value = parseFloat(total_items.innerHTML.replace( /[^\d\.]*/g, ''))
        const new_total_item_value = parseInt(total_item_value) - parseInt(cartitem.count);
        total_items.innerHTML = `Total Items: ${new_total_item_value}`;

        //Changes total price
        const total_price = document.getElementById('total_price')
        const total_price_value = parseFloat(total_price.innerHTML.replace( /[^\d\.]*/g, ''))
        const new_total_price_value = (total_price_value - cartitem.total_price).toFixed(2);
        total_price.innerHTML = `Total Price: $${new_total_price_value}`; 
    };
  }
    const AddClick = (cartitem,cart) => {
      let prodId ='';
      prodId = cartitem.id;
      if (dispatch && dispatch !== null && dispatch !== undefined) {
        dispatch(add_quantity(prodId));
        //Changes value on add click 
        const ele = document.getElementById(cartitem.id)
        const value = ele.innerHTML;
        const newvalue = parseInt(value) + 1;
        ele.innerHTML = newvalue;
        //Changes caritem quantity on Add click 
        const cartitem_total_price = document.getElementById(cartitem.id+'price')
        const cartitem_total_price_value = parseFloat(cartitem_total_price.innerHTML.replace( /[^\d\.]*/g, ''))
        const new_cartitem_total_price_value = (cartitem_total_price_value + cartitem.product_price).toFixed(2);
        cartitem_total_price.innerHTML = `Total: $${new_cartitem_total_price_value}`;

        //Changes total items
        const total_items = document.getElementById('total_items')
        const total_item_value = parseFloat(total_items.innerHTML.replace( /[^\d\.]*/g, ''))
        const new_total_item_value = parseInt(total_item_value) + 1;
        total_items.innerHTML = `Total Items: ${new_total_item_value}`;

        //Changes total price
        const total_price = document.getElementById('total_price')
        const total_price_value = parseFloat(total_price.innerHTML.replace( /[^\d\.]*/g, ''))
        const new_total_price_value = (total_price_value + cartitem.product_price).toFixed(2);
        total_price.innerHTML = `Total Price: $${new_total_price_value}`; 
    };    
  }
    const RemoveClick = (cartitem,cart) => {
      let prodId ='';
      prodId = cartitem.id;
      if (dispatch && dispatch !== null && dispatch !== undefined) {
        dispatch(remove_quantity(prodId));

        //Changes caritem quantity on remove click 
        const ele = document.getElementById(cartitem.id)
        const ele_all = document.getElementById(cartitem.id+'all');
        const value = ele.innerHTML;
        const newvalue = value - 1;
        ele.innerHTML = newvalue;
        //checks if value is 0 or less and deletes div
        if(newvalue ===0){
          ele_all.remove();
        }
        if(newvalue !==0 ){
        //Changes caritem quantity on remove click
        const cartitem_total_price = document.getElementById(cartitem.id+'price')
        const cartitem_total_price_value = parseFloat(cartitem_total_price.innerHTML.replace( /[^\d\.]*/g, ''))
        const new_cartitem_total_price_value = (cartitem_total_price_value - cartitem.product_price).toFixed(2);
        cartitem_total_price.innerHTML = `Total: $${new_cartitem_total_price_value}`;
        }

        //Changes total items
        const total_items = document.getElementById('total_items')
        const total_item_value = parseFloat(total_items.innerHTML.replace( /[^\d\.]*/g, ''))
        const new_total_item_value = parseInt(total_item_value) - 1;
        total_items.innerHTML = `Total Items: ${new_total_item_value}`;

        //Changes total price
        const total_price = document.getElementById('total_price')
        const total_price_value = parseFloat(total_price.innerHTML.replace( /[^\d\.]*/g, ''))
        const new_total_price_value = (total_price_value - cartitem.product_price).toFixed(2);
        total_price.innerHTML = `Total Price: $${new_total_price_value}`; 
    };
  }

    return(
    <div className={Styles.Cart_main}>
      <div className={Styles.Cart_border}>
        <div className={Styles.Cart_title_flex}>
        <ToastContainer className="foo" style={{ top: "10vh" }}/>
          <h2 className={Styles.Cart_title}>{user !== null && user.first_name}'s Cart</h2>
        </div>
        {cart.number_of_products === 0 ? 
        <h2 className={Styles.Cart_empty_h3}>
          Your Cart is Empty go to the store and add some Sweets!
          <Link href ='/store'><a>Click here!</a></Link>
        </h2> :
            cartItems.map((cartitem)=>(
              <div key = {cartitem.id} id = {cartitem.id+'all'}>
                <div className={Styles.Cart_item}>
                  <img className={Styles.Cart_item_img} src= {API_URL + cartitem.product_image}/>
                  <div className={Styles.Cart_item_manager}>
                    <div className={Styles.Cart_item_name}>{cartitem.product_name}</div>
                    <div className={Styles.Cart_item_count} >
                      <div onClick={()=>AddClick(cartitem,cart)} value={cartitem.id}  className={Styles.count_plus}><AiFillPlusCircle /></div>
                        <div className={Styles.count} id = {cartitem.id} >{cartitem.count}</div>
                      <div onClick={()=>RemoveClick(cartitem,cart)} className={Styles.count_minus}><AiFillMinusCircle /></div>
                    </div>
                    <button onClick={()=>CartRemove(cartitem, cart)} id={cartitem.id} className={Styles.Remove_button}>Remove Item</button>
                  </div>
                  <div className={Styles.Cart_item_stats}>
                    <h3 className={Styles.total_price} id={cartitem.id+'price'}>Total: {ds}{cartitem.total_price}</h3>
                    <h3 className={Styles.total_price}>Price for one: {ds}{cartitem.product_price}</h3>
                  </div>
                </div>
              </div>
                ))
            }
            </div>
        {cart.number_of_products === 0 ? 
         <div className={Styles.Cart_bottom}>
        </div>
        :
          <div className={Styles.Cart_bottom}>
              <div className={Styles.Cart_totals}>
              <h3 id='total_items' >Total Items: {cart !== null && cart.number_of_products} </h3>
              <h3 id ='total_price'>Total Price: {ds}{cart !== null && cart.total_price}</h3>
              </div>
              <button onClick = {() =>setShowModal(true)} >Checkout</button>
          </div>
}
            <Modal show = {showModal} onClose={() => setShowModal(false)}>
            </Modal>
      </div>
  )
    }

export default Cart;