import React from "react"

const CartContext = React.createContext();
const {Provider} = CartContext;

const CartProvider = ({children}) => {
    const [cart, setCart] = React.useState([]);

    const addToCart = (item, count) => {
        if(isInCart(item.id)) {
            const newCart = cart.map(cartItem => {
                if(cartItem.id === item.id) {
                    cartItem.quantity += count
                }
                return cartItem
            })
            setCart(newCart)
        }else {
            setCart([...cart, {...item, quantity: +count}])
        }
    }

    const removeFromCart = (id) => {
        if(isInCart(id)) {
            const indexItemDelete = cart.indexOf(itemCart => itemCart.id === id)
            setCart(cart.splice(indexItemDelete, 1))

        }else{
            alert("Este producto no se encuentra en su carrito")
        }
    }

    const isInCart = (id) => {
        return cart.find(item => item.id === id)
    }

    const deleteAll = () => {
        setCart([])
    }

    console.log(cart);

    return (
        <Provider value ={{
            addToCart,
            removeFromCart,
            isInCart,
            deleteAll,
            cart,
        }}>{children}</Provider>
    )
}

export {CartContext, CartProvider}