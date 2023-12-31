import React, { useRef, useState } from 'react'
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (e) => {
     e.preventDefault();
     const enteredAmount = amountInputRef.current.value;
     const enteredAmountNumber = +enteredAmount;
     if(enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5){
      setAmountIsValid(false);
       return;
     }
     props.onAddToCart(enteredAmountNumber);
  }
  return <form className={classes.form} onSubmit={submitHandler}>
    <Input label="Amount" input={{
      ref: amountInputRef,
      id : 'amount',
      type: 'number',
      min: '1',
      max: '5',
      step: '1',
      defaultValue: '1'
    }} />
    <button>+Add</button>
    {!amountIsValid && <p>Please Enter a Valid Amount (1-5)!</p> }
  </form>
}

export default MealItemForm