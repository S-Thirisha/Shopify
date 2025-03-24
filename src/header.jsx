import search from './assets/search.png'
import cart from './assets/cart.png'
const Header=({count})=>{
    return (
        <div className="heading-container" >
                <h1 className="heading">Shopify</h1>
                 
                
                <div className="cart-container">

                    <img src={cart} alt="cart icon" className="cart" />
                    <p className="itemCount">{count}</p>
                </div>

            </div>
    )
}
export default Header;