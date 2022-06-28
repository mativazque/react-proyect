import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { Spinner } from "react-bootstrap";




export default function ItemDetailContailer({ id }) {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(undefined)

    useEffect(() => {

        setLoading(true)
        setTimeout(() => {
            const db = getFirestore()
            const productRef = doc(db, "productos", id);
            getDoc(productRef).then((snapshot) => {
                setItem({ id: snapshot.id, ...snapshot.data() });
            });
            setLoading(false)
        }, 1000)

    }, [id])

    return (
        <main>
            {loading ?
                <div className="text-center mt-5">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden text-center">Loading...</span>
                    </Spinner>
                </div>
                :
                <ItemDetail item={item} />
            }
        </main>
    )
}









