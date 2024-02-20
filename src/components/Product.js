import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
import {add, remove} from '../redux/slices/cartSlice'
import {toast} from 'react-hot-toast';
import '../index.css'

export const Product = ({product}) => {

  const {cart} = useSelector((state) => {
    return state;
  })

  const dispatch = useDispatch();

  function addToCart(){
    dispatch(add(product))
    toast.success("Added to cart")
  }

  function removeItem(){
    dispatch(remove(product.id))
    toast.error("Removed from cart");
  }

  let text = product.description;
  if(text.length>50) 
    text= `${text.substring(0,49)}...`;

  let prodTitle = product.title;
  if(prodTitle.length>16)
  prodTitle=`${prodTitle.slice(0,15)} ...`

  return (
    <div className='card'>
      <h4>{prodTitle}</h4>
      <p>{text}</p>
      <img src={product.image} className='cardImage'></img>
      <div>
        <p>${product.price}</p>
        {/* <button> */}
          {
            cart.some((p) => {
              return (p.id === product.id)
            }) ? <button onClick={removeItem}>Remove from Cart</button> : 
            <button onClick={addToCart}>Add to Cart</button>
          }
        {/* </button> */}
      </div>
    </div>
  )
}
