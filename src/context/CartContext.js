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
        setCart(cart.filter((item) => item.id !== id))
    }


    const isInCart = (id) => {
        return cart.find(item => item.id === id)
    }

    const deleteAll = () => {
        setCart([])
    }

    const totalCart = () => cart.reduce((acumulator, buy) => acumulator + buy.price * buy.quantity, 0)


    return (
        <Provider value={{
            addToCart,
            removeFromCart,
            isInCart,
            deleteAll,
            totalCart,
            cart,
        }}>{children}</Provider>
    )
}

export { CartContext, CartProvider }