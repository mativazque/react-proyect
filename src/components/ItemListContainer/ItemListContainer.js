import React, { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"
import { Spinner } from "react-bootstrap";

export default function ItemListContainer({ categoryId }) {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(undefined)

    useEffect(() => {

        setLoading(true)
        setTimeout(() => {
            const db = getFirestore()
            if (categoryId) {
                const q = query(
                    collection(db, "productos"),
                    where("category_id", "==", categoryId)
                );
                getDocs(q).then((snapshots) => {
                    if (snapshots.size === 0) {
                        console.log("No hay productos");
                    }
                    setProductos(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                });
            } else {
                const productsRef = collection(db, "productos");
                getDocs(productsRef).then((snapshots) => {
                    if (snapshots.size === 0) {
                        console.log("No hay productos");
                    }
                    setProductos(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                });
            }
            setLoading(false)
        }, 1000)
    }, [categoryId]);

    return (
        <main className="pb-5">
            {loading ?
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden text-center">Loading...</span>
                    </Spinner>
                </div>
                :
                <ItemList productos={productos} />
            }
        </main>
    )
}
