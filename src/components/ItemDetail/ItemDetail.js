import React, { useState } from "react"
import ItemCount from "../Counter/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"




export default function ItemDetail({ item }) {

    const { addToCart, removeFromCart} = React.useContext(CartContext);
    const routeIMG = `../../`;
    const [count, setCount] = useState(1);
    const [buy, setBuy] = useState(false);

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleRest = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }


    return (
        <>
            <h1 className="titleHeader p-5">{item.title}</h1>
            <div className="text-center">
                <img src={routeIMG + item.image} alt="ItemOne" className="imgDetailItem" />
            </div>
            <p className="text-white p-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati beatae fugit nulla, maiores, accusamus exercitationem, dicta at voluptatem eum ab quisquam totam inventore? Odio, saepe recusandae voluptas laudantium eius dolorem!</p>
            <h5 className="text-center text-white p-4 m-0">Price: USD {item.price}</h5>
            <div className="d-flex justify-content-center">
                {buy ? <button className="d-flex justify-content-center" >
                            <Link to="/cart" className="text-color-black" onClick={()=>addToCart(item, count)}>Finalizar compra</Link>
                        </button> : 
                <ItemCount onAdd={handleAdd} onRest={handleRest} counter={count} />}
            </div>
             <div className="text-center mt-4">
                <button onClick={() => setBuy(true)}>Comprar</button>
            </div> 
            <button onClick={()=>removeFromCart(item.id)}>Eliminar producto comprado</button>
        </>
    )
}

