import React, { useContext } from 'react';
import classes from './MealsItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../Store/cart-context'
const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`
  const addToCartHandeler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }
  return <li className={classes.meal}>
    <div>
      <h3>{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
    </div>
    <div>
      <MealItemForm onAddToCart={addToCartHandeler}/>
    </div>
  </li>
}
export default MealsItem