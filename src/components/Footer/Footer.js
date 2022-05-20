export default function Footer() {
    return (
        <footer className="pt-5 bg-dark text-center mt-4">
            <div className="container">
                <h5 className="m-0 text-center text-white">Encontranos en las redes:</h5>
                <div className="container text-center mt-3 mb-3">
                    <a href="https://www.facebook.com/" className="ancalaFooter">
                        <i className="fa-brands fa-facebook-f text-white fa-2xl pe-2"></i>
                    </a>
                    <a href="https://www.instagram.com/" className="ancalaFooter">
                        <i className="fa-brands fa-instagram text-white fa-2xl ps-2"></i>
                    </a>
                </div>
            </div>
            <p className="text-muted m-0 py-4">Sitio diseñado por Matías Vázquez</p>
        </footer>
    )
}