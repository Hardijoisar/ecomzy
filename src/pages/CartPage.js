import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import {CartItem} from "../components/CartItem"
import {NavLink} from 'react-router-dom';
import '../index.css'

export const CartPage = () => {

  const {cart} = useSelector((state) => {
    return state;
  })

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount( cart.reduce( (acc, curr) => (acc + curr.price) , 0));
  }, [cart])

  return (
    <div>
      {
        cart.length === 0 ?  
        <div>
          <h2 className="text-center">Your shopping cart is empty.</h2>
          <NavLink to="/">
          <button>Shop Now</button>
          </NavLink>
        </div> :
        <div className='flr'>
          <div>
          {
          (cart.map((cartItem) => {
            return <CartItem product = {cartItem}></CartItem>
          }))
          }
          </div>
          <div className='flc'>
          <div>
            <div>Your Cart</div>
            <div>Summary</div>
            <p>
              <span>Total Items : {cart.length}</span>
            </p>
          </div>
          <div>
            <p>Total Amount : ${totalAmount}</p>
            <button>Checkout Now</button>
          </div>
          </div>

        </div>

      }
    </div>
  )
}
