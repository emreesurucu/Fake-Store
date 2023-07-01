import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'
import Filter from '../../components/Filter/Filter'

function Homepage() {
    const[products, setProducts] = useState([])

    useEffect(
        ()=>{
            axios.get('https://fakestoreapi.com/products')
            .then(res =>{
                setProducts(res.data)
            })
            
            .catch(err => console.log(err))


        }
    )
  return (
    <div className='homepage-container'>
        <Filter />
        <div className='items-container'>
            {
                products.map(item => <ProductCard key={item.id} product={item} />)
            }
        </div>
        
    </div>
  )
}

export default Homepage