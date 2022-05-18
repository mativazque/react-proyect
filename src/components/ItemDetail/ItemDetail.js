
export default function ItemDetail({ item }) {
    return (
        <>
            <h1>{item.title}</h1>
            <img src={item.image} alt="ItemOne" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati beatae fugit nulla, maiores, accusamus exercitationem, dicta at voluptatem eum ab quisquam totam inventore? Odio, saepe recusandae voluptas laudantium eius dolorem!</p>
            <h5>Price: USD {item.price}</h5>
            <button>Comprar</button>
        </>
    )
}







