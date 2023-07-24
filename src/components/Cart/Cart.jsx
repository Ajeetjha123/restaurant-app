import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
const Cart = (props) => {
  const CartItems = <ul className={classes['cart-items']}>{[
    {id:'1', name:'Sushi', amount:12, price: 290},
  ].map((item) => <li>{item.name}</li> )}</ul>  
  return (
    <Modal>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$35</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart