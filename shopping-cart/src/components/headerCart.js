import '../App.css'
import { FaShoppingCart } from "react-icons/fa";
import { UserCartContext } from '../management/dataContext';
export const HeaderCart = () =>{
    const {amountItem} = UserCartContext()

    return(
        <div className='shp-cart-container'>
            <FaShoppingCart className='cart-icon'/>
            <span className="amount-item">{amountItem}</span>
        </div>
    )
}