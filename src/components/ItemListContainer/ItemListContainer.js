import ItemCount from "../Counter/ItemCount"
import React from "react"
import ItemList from "../ItemList/ItemList"
import { products } from "../../data/productos"


export default function ItemListContainer({ intro }) {
    return (
        <body>
            <h1 className="header">{intro}</h1>
            <ItemCount />
            <ItemList />
        </body>
    )
}
