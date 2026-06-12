//import del css
import "../assets/css/Navbar.css"
//import el componente
import CartWidget from "./CartWidget"

//IMPORTO LA IMG DE SRC
import logo from "../assets/logo-shop.png"

const Navbar = (props) => {
//logica
    return(
        <nav className='nav-container'>
            <a href="" className="anchor-nav">
                <img alt='logo' src={logo} className="logo"/>
            </a>
            <a href="" className="anchor-nav">Nuevos</a>
            <a href="" className="anchor-nav">Ofertas</a>
            <a href="" className="anchor-nav">Mas Vendidos</a>
            <CartWidget compra={15} cart={props.cart}/>
        </nav>
    )

}

export default Navbar