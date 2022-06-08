import React from "react"

const CartContext = React.createContext();
const { Provider } = CartContext;

const CartProvider = ({ children }) => {
    const [cart, setCart] = React.useState([]);

    const addToCart = (item, count) => {
        if (isInCart(item.id)) {
            const newCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                    cartItem.quantity += 1
                }
                return cartItem
            })
            setCart(newCart)
        } else {
            setCart([...cart, { ...item, quantity: +count }])
        }
    }

    const removeFromCart = (id) => {
        const indexItemDelete = cart.findIndex(itemCart => itemCart.id === id)
        const newCart = cart.splice(indexItemDelete, 1)
        setCart(newCart);
        console.log("newCart", newCart);
    }


    const isInCart = (id) => {
        return cart.find(item => item.id === id)
    }

    const deleteAll = () => {
        setCart([])
    }

    console.log("Cart", cart);

    return (
        <Provider value={{
            addToCart,
            removeFromCart,
            isInCart,
            deleteAll,
            cart,
        }}>{children}</Provider>
    )
}

export { CartContext, CartProvider }