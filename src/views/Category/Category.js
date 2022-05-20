import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import { useParams } from "react-router-dom";

export default function Category () {
    const {categoryId} = useParams();
    return(
        <>
            <h3 className="titleHeader color-white p-5">Nuestros productos</h3>
            <ItemListContainer categoryId={categoryId} />
        </>
    )
}
