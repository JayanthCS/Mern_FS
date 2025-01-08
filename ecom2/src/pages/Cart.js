import { UseCartContext } from "../contexts/cartContext.js";
import CartItem from "../components/CartItem.js";
import { NavLink } from "react-router-dom";



let Cart = () => {
    let { cart, total_price } = UseCartContext();

    return (
        <div className="container mt-5">
            <h1>HELLO</h1>
            {cart.map(cartedItem => <CartItem key={cartedItem.id} cartedItem={cartedItem} />)}

            <div className="row mb-3 border p-2 mb-5">
                <div className="offset-md-8 col-md h5">Total</div>
                <div className="col-md-2 h5">{total_price}</div>
            </div>
            <div className="row mt-5">
                <div className="d-flex justify-content-between" >
                    <NavLink to='/'>
                        <input className="btn btn-info" type="button" value={"continue Shopping"} />
                    </NavLink>
                    <NavLink to='https://paytm.com/' target="_blank" >
                        <input className="btn btn-success" type="button" value={"proceed to payment"} />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}




export default Cart;