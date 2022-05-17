import Item from "../Item/Item"


export default function ItemList({productos}) {


    return (
        <div className="containerCards">
            {productos.map((product) => (
                <Item product={product} key={product.id} />
            )
            )};
        </div>
    )

}