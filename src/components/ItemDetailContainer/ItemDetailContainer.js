import React from "react"
import { Data } from "../../data/productos"
import ItemDetail from "../ItemDetail/ItemDetail"



export default function ItemDetailContailer() {
    const [item, setItem] = React.useState([])
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        
        Data
        .then((result) => setItem(result[0]))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [])



    return (
        <div>
            {loading ? <p>Loading...</p> : <ItemDetail item={item} />}
        </div>
    )
}









