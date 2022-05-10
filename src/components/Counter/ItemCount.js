import React, {useState} from "react"

export default function ItemCount () {
    const [count, setCount] = useState (0);
    const stock = 5;

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        } else {
            alert("Contamos con un stock de 5 unidades, lo sentimos.")
        }
        
    }

    const handleRest = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <input type="button" value="+" onClick={handleAdd}/>
            <h4>{count}</h4>
            <input type="button" value="-" onClick={handleRest}/>
        </div>
    )
}
