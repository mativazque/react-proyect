import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import React, { useState } from "react"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"


export default function Confirmation({ order }) {

    const [loading, setLoading] = useState(true)

    setTimeout(() => setLoading(false), 2000)

    return (
        <main>
            {loading ?
                <LoadingSpinner/>
                :
                <div className="w-100 flex-column d-flex justify-content-center align-items-center">
                    <h2 className="my-5 text-success">Gracias por tu compra.</h2>
                    <h5>Su Id es {order}</h5>
                    <Link to="/">
                        <Button className="mt-5" variant="dark">Volver al inicio</Button>
                    </Link>
                </div>
            }
        </main>

    )
}