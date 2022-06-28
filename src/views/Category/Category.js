import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import { useParams } from "react-router-dom";

export default function Category() {
    const { categoryId } = useParams();
    let titleCategory = `Productos`;

    if (categoryId == 1) { titleCategory = `Mouses` } else if
        (categoryId == 2) { titleCategory = `Camaras Web` } else if
        (categoryId == 3) { titleCategory = `Auriculares` } else if
        (categoryId == 4) { titleCategory = `Teclados` } else if
        (categoryId == 5) { titleCategory = `Sillas` }


    return (
        <main>
            <h3 className="text-center color-white p-5">{titleCategory}</h3>
            <ItemListContainer categoryId={categoryId} />
        </main>
    )
}
