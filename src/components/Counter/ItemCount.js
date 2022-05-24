
export default function ItemCount({onAdd, onRest, counter}) {
    return (
        <>
            <input type="button" value="-" onClick={onRest} />
            <h4 className="text-white ms-4 me-4">{counter}</h4>
            <input type="button" value="+" onClick={onAdd} />
        </>
    )
}