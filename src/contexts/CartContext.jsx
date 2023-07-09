import {useState, createContext, useEffect} from 'react'

export const CartContext = createContext();

export default function CartContextProvider(props){

    const [cart, setCart] = useState([])
    
    useEffect(
        ()=>{
            const storedFavs = localStorage.getItem('fakeCart')
            if (storedFavs){
                setCart(JSON.parse(storedFavs))
            }
        }, []
    )

    useEffect(
        ()=>{
            console.log('update, cart is', cart)
            localStorage.setItem('fakeCart', JSON.stringify(cart))
        }, [cart]
    )
    

    const addProduct = (productToAdd) =>{
        console.log('adding', productToAdd)
        let newCart = [...cart, productToAdd]
        setCart(newCart)
    }

    const removeProduct = (prodId) =>{
        console.log("remove", prodId)
        let newCart = cart.filter(item => item.id !== prodId)
        setCart(newCart)
    }

    return(
        <CartContext.Provider value={{ cart, addProduct, removeProduct, setCart }} >
            {props.children}
        </CartContext.Provider>
    )


}