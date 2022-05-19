import React, { useEffect, useState } from "react"
import { Data } from "../../data/productos"
import ItemDetail from "../ItemDetail/ItemDetail"



export default function ItemDetailContailer({id}) {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        Data
        .then((result) => setItem(result.find(product => product.id === + id)))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))

    }, [])

    return (
        <div>
            {loading ? <p>Loading...</p> : <ItemDetail item={item} />}
        </div>
    )
}









