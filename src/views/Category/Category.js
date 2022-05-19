import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import { useParams } from "react-router-dom";

export default function Category () {
    const {categoryId} = useParams();
    return(
        <>
            <h1>Sección de Category</h1>
            <ItemListContainer categoryId={categoryId} />
        </>
    )
}
