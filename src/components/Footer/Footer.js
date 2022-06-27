import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <footer className="pt-5 bg-dark text-center py-5">
            <div className="container">
                <h5 className="m-0 text-center text-white">Encontranos en las redes:</h5>
                <div className="container text-center mt-3 mb-3">
                    <a href="https://www.facebook.com/" className="me-2">
                        <FontAwesomeIcon icon={faFacebookF} size="2x"/>
                    </a>
                    <a href="https://www.facebook.com/" className="ms-2">
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    </a>
                </div>
            </div>
            <p className="text-muted m-0 pt-4">Sitio diseñado por Matías Vázquez</p>
        </footer>
    )
}