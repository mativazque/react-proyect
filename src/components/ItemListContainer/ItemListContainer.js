import ItemCount from "../Counter/ItemCount"

export default function ItemListContainer ({intro}) {
   
    return (
        <body>
            <h1 className="header">{intro}</h1>
            <ItemCount/>
        </body>
    )
}
