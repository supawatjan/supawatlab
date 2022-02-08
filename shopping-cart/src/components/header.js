import { HeaderCart } from "./headerCart"
import '../App.css'
export const Header = () =>{

    return(
        <header>
            <span className="logo">ErthPhere Shop</span>
            <HeaderCart/>
        </header>
    )
}