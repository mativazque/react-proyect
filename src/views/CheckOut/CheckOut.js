import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartContext } from "../../context/CartContext"
import React from 'react'

export default function CheckOut() {
    const { cart, totalCart } = React.useContext(CartContext);
    const [data, setData] = React.useState()
    const [orderId, setOrderId] = React.useState()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const order = {
            buyer: data,
            items: cart,
            total: totalCart(),
        };
        console.log(order);
        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        await addDoc(ordersCollection, order).then(({ id }) => {
            setOrderId(id)
            alert(`Gracias por tu compra. El id de su compra es ${orderId}`)
        })
        
    }




    return (
        <>
            <h1>Completa los datos y finaliza la compra</h1>
            <form onSubmit={handleSubmit}>
                <h1>Checkout</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input
                    type="phone"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    value="Finalizar compra"
                />
            </form>
        </>
    )
}