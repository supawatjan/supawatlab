import { MdOutlineCancel } from "react-icons/md";
import { UserCartContext } from "../management/dataContext";
export const ProductItem = ({id,image_url,name,price,quantity}) =>{
    const {changeAmount,delItem,formatNumber,inputAmount}  = UserCartContext()
    return(
        <div className="product-item-container">
            {/* product image */}
            <img src={image_url} alt={name} className="product-image"/> 
            {/* product name */}
            <span className="product-name">{name}</span>
            {/* unit price */}
            <span className="unit-price">฿{formatNumber(price)}</span>
            {/* quantity */}
            <div  className="quantity-container">
                <button className="decrease q-btn" onClick={()=>changeAmount(id,'decrement')}>-</button>
                <input className="quantity" type='text'  value={quantity} onChange={(e)=>inputAmount(id,e.target.value)}></input>
                <button className="increase q-btn"onClick={()=>changeAmount(id,'increment')}>+</button>
            </div>
            {/* total price */}
            <span className="total-price">฿{formatNumber(price*quantity)}</span>
            {/* delete item */}
            <button className="del-item" onClick={()=>delItem(id)}><MdOutlineCancel/></button>

        </div>
    )
}