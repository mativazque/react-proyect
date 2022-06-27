import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {getFirestore, doc, getDoc} from "firebase/firestore"




export default function ItemDetailContailer({ id }) {
    const [item, setItem] = useState([])

    useEffect(() => {

        const db = getFirestore()
    
        const productRef = doc(db, "productos", id);
        getDoc(productRef).then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() });

        });

    }, [id])

    return (
        <main>
            {<ItemDetail item={item} />}
        </main>
    )
}









