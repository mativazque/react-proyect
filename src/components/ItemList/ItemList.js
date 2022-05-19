import Item from "../Item/Item"


export default function ItemList({productos}) {


    return (
        <div className="containerCards">
            {productos.map((productos) => (
                <Item productos={productos} key={productos.id} />
            )
            )};
        </div>
    )

}