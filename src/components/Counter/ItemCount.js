import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons"


export default function ItemCount({ onAdd, onRest, counter }) {
    return (
        <>
            <FontAwesomeIcon icon={faCircleMinus} size="2x" onClick={onRest} type="button" />
                <h4 className="ms-4 me-4">{counter}</h4>
            <FontAwesomeIcon icon={faCirclePlus} size="2x" onClick={onAdd} type="button" />
        </>
    )
}