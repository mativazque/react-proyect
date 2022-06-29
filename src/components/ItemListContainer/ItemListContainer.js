import React, { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"

export default function ItemListContainer({ categoryId }) {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(undefined)

    useEffect(() => {

        setLoading(true)
        setTimeout(() => setLoading(false), 1000)

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
        

    }, [categoryId]);

    return (
        <main className="pb-5">
            {loading ?
                <LoadingSpinner />
                :
                <ItemList productos={productos} />
            }
        </main>
    )
}
