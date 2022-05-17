import ItemCount from "../Counter/ItemCount"
import React, { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { Data } from "../../data/productos"


export default function ItemListContainer({ intro }) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);

        Data
        .then((result) => setProductos(result))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, []);

    return (
        <div>
            <h1 className="header">{intro}</h1>
            <ItemCount />
            {loading ? <p>Loading...</p> : <ItemList productos={productos}/>}
        </div>
    )
}
