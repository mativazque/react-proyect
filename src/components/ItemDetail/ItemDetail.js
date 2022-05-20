import ItemCount from "../Counter/ItemCount"

export default function ItemDetail({ item }) {
    const routeIMG = `../../`;
    return (
        <>
            <h1 className="titleHeader p-5">{item.title}</h1>
            <div className="text-center">
                <img src={routeIMG + item.image} alt="ItemOne" />
            </div>
            <p className="text-white p-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati beatae fugit nulla, maiores, accusamus exercitationem, dicta at voluptatem eum ab quisquam totam inventore? Odio, saepe recusandae voluptas laudantium eius dolorem!</p>
            <h5 className="text-center text-white p-4 m-0">Price: USD {item.price}</h5>
            <ItemCount />
            <div className="text-center mt-4">
                <button >Comprar</button>                
            </div>
        </>
    )
}

