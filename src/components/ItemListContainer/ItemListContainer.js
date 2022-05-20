import React, { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { Data } from "../../data/productos"


export default function ItemListContainer({categoryId}) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);

        if (categoryId) {
            Data
            .then((result) => setProductos(result.filter(productos => productos.category_id === +categoryId)))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
        }else {
            Data
            .then((result) => setProductos(result))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
        }
        
    }, [categoryId]);

    return (
        <main>
            {loading ? <p>Loading...</p> : <ItemList productos={productos}/>}
        </main>
    )
}
