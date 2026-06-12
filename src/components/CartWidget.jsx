import { TiShoppingCart } from "react-icons/ti";
import Badge from 'react-bootstrap/Badge';

const CartWidget = (props)=> {
    return(
        <div>
            {/* <span>🛒</span> */}
            <TiShoppingCart color='white' fontSize={'1.5rem'}/>
            {/* <span style={{color:"red"}}>{5}</span> */}
            {/* <Badge bg="danger">{props.compra}</Badge> */}
            <Badge bg="danger">{props.cart}</Badge>
        </div>
    )
}
export default CartWidget