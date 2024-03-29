import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore";
import { CartContext } from "../../context/CartContext"
import React from 'react'
import Confirmation from "../Confirmation/Confirmation"

export default function CheckOut() {
    const { cart, totalCart, deleteAll } = React.useContext(CartContext);
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
            status: `Generada`,
            date: Timestamp.fromDate(new Date),
        };
        console.log(order);
        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        await addDoc(ordersCollection, order).then(({ id }) => {
            setOrderId(id)
        })
        deleteAll();
    }




    return (
        <main>
            {orderId === undefined ?
                <>
                    <h1 className="text-center my-5">Check Out</h1>
                    <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name Apellido"
                            onChange={handleChange}
                            className="m-3 inputCheckOut"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="e-mail@xxxx.com"
                            onChange={handleChange}
                            className="m-3 inputCheckOut"
                            required
                        />
                        <input
                            type="phone"
                            name="phone"
                            placeholder="9999999999"
                            onChange={handleChange}
                            className="m-3 inputCheckOut"
                            required
                        />
                        <input
                            type="submit"
                            value="Finalizar compra"
                            className="m-3 inputCheckOut"
                        />
                    </form>
                </>
                :
                <Confirmation order={orderId} />
            }
        </main>
    )
}