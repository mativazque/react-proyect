import { products } from "../../data/productos"
import Item from "../Item/Item"


export default function ItemList() {


    return (
        <div>
            {products.map((product) => (
                <Item product={product} key={product.id} />
            )
            )};
        </div>
    )

}