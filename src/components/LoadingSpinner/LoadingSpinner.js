import { Spinner } from "react-bootstrap";

export default function LoadingSpinner() {
    return (
        <div className="text-center mt-5">
            <Spinner animation="border" role="status">
                <span className="visually-hidden text-center">Loading...</span>
            </Spinner>
        </div>
    )
}