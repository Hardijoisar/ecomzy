import React, { useEffect, useState } from 'react'
import {Product} from "../components/Product"
import { Spinner } from '../components/Spinner';
import '../index.css'

export const HomePage = () => {

  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([])

  async function fetchData()
  {
    setLoading(true);
    try{
      const response = await fetch(API_URL);
      const data = await response.json();

      setPosts(data);
    }
    catch(error){
      console.log(error)
      setPosts([])
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {
        loading ? 
        <Spinner></Spinner> : 
        (
          posts.length === 0 ? 
            <h1>No products found!</h1> : 
            <div className='cardsDiv'>
            {
            posts.map((post) => {
              return <Product key={post.id} product={post} />
            })
            }
            </div>
        )
      }
    </div>
  )
}
