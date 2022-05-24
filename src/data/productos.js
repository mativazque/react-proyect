export const products = [
    {
        id: 1,
        title: "Mouse Logitech G PRO X",
        stock: 3,
        price: 130,
        image: "images/Logitech_G_PRO_X.png",
        category_id: 1,
    },
    {
        id: 2,
        title: "Mouse SteelSeries Aerox3",
        stock: 3,
        price: 130,
        image: "images/SteelSeriesAerox3.jpg",
        category_id: 1,
    },
    {
        id: 3,
        title: "Camara Web Logitech Brio",
        stock: 2,
        price: 199,
        image: "images/LogitechBrio.jpg",
        category_id: 2,
    },
    {
        id: 4,
        title: "Auricular Logitech G935",
        stock: 7,
        price: 85,
        image: "images/LogitechG935.jpg",
        category_id: 3,
    },
    {
        id: 5,
        title: "Teclado Razer Huntsman Elite",
        stock: 1,
        price: 120,
        image: "images/RazerHuntsmanElite.jpg",
        category_id: 4,
    },
    {
        id: 6,
        title: "Silla Secretlab OMEGA",
        stock: 1,
        price: 19,
        image: "images/SecretlabOMEGA.jpg",
        category_id: 5,
    },
    {
        id: 7,
        title: "Auricular Razer Nari Ultimate",
        stock: 1,
        price: 120,
        image: "images/RazerNariUltimate.jpg",
        category_id: 3,
    },
    {
        id: 8,
        title: "Silla MSI MAG CH120X",
        stock: 1,
        price: 220,
        image: "images/MSI_MAG_CH120X.jpg",
        category_id: 5,
    },
    {
        id: 9,
        title: "Camara Web El gato Facecam",
        stock: 1,
        price: 120,
        image: "images/ElgatoFacecam.jpg",
        category_id: 2,
    },
    {
        id: 10,
        title: "Teclado Logitech G Pro",
        stock: 1,
        price: 100,
        image: "images/LogitechG_Pro.jpg",
        category_id: 4,
    },
    
]

export const Data = new Promise ((resolve, reject) => {
    let pedido = true;
    setTimeout(() => {
        if (pedido) {
            resolve(products)
        }else {
            reject(`Lo sentimos hubo un error`)
        }
    }, 2000)
});