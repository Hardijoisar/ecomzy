import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {add, remove} from '../redux/slices/cartSlice'
import '../index.css'

export const CartItem = ({product}) => {

  const dispatch = useDispatch()

  function removeFromCart() {
    dispatch(remove(product.id));
  }

  let text = product.description;
  text = text.length>50 ? text.slice(0, 50) + '...' : text;

  let prodTitle = product.title;
  if(prodTitle.length>16)
  prodTitle=`${prodTitle.slice(0,15)} ...`

  return (
    <div className='cardCart'>
      <div>
        <img className='cardImage' src={product.image}></img>
      </div>
      <div>
        <h3>{prodTitle}</h3>
        <p>{text}</p>
        <div>
           
        <p>${product.price}</p>
        <MdDelete onClick={removeFromCart}/>
        </div>
      </div> 
    </div>
  )
}
