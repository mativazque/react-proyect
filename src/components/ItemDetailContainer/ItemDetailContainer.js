import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"




export default function ItemDetailContailer({ id }) {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(undefined)

    useEffect(() => {

        setLoading(true)
        setTimeout(() => setLoading(false), 1000)

        const db = getFirestore()
        const productRef = doc(db, "productos", id);
        getDoc(productRef).then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() });
        });
        
    }, [id])

    return (
        <main>
            {loading ?
                <LoadingSpinner />
                :
                <ItemDetail item={item} />
            }
        </main>
    )
}









