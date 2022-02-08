import { ProductItem } from "./productItem"
import { UserCartContext } from "../management/dataContext"
const cartEmptyImageUrl = 'https://shoppingicons.com/wp-content/uploads/2021/07/shopping-bag-4.png'
export const Cart = () =>{
    const {cart,balance,isEmpty,formatNumber} = UserCartContext()
    return(
        <>
            <div className="shopping-cart">
                <div className="shp-cart-header">
                    <span className="shp-cart-title ">Shopping Cart</span>
                    <span className="unit-price-title small">Unit Price</span>
                    <span className="quan-title small">Quantity</span>
                    <span className="total-price-title small">Total Price</span>
                    <span className="action small"></span>
                </div>
                
                {cart.map((product)=>{
                    return <ProductItem key={product.id} {...product}/>
                })}
                {isEmpty && <div className="empty-cart">
                    <img src={cartEmptyImageUrl} alt="cart-empty"/>
                    <span>Your shopping cart is empty</span>
                </div>}
                
            </div>
            {/* seperate from product-in-cart-container */}
            <div className="total-container">
                <span>Balance : ฿{formatNumber(balance)}</span>
            </div>
        </>
        
    )
}