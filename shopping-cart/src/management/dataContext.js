import { createContext,useContext, useEffect, useReducer, useState} from "react"
import CartData from "../data/CartData"
import reducer from "./reducer"

const userCart = {
    cart:CartData,
    amountItem: 0,
    balance:0
}
export const UserCartContext =()=>{
    return useContext(DataContext)
}

// *********************** Return Part***************//
const DataProvider = ({children}) =>{
    const [isEmpty, setIsEmpty] = useState(false)
    const [state,dispatch] = useReducer(reducer, userCart)
    const changeAmount =  (id,type) =>{
        dispatch({type:"CHANGE_AMOUNT",payload:{id,type}})
    }
    const inputAmount = (id,value) =>{
        dispatch ({type:"INPUT_AMOUNT",payload:{id,value}})
    }
    const delItem = id => {
        dispatch({type:"DEL_ITEM",payload:{id}})
    }
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    // const adjustAmountItem = () =>{ // ใช้ usereducer ต้องใช้ตลอด หากต้องการอัพเดต state ที่กำหนดไว้ใน usereducer
    //     console.log(state);
    //     let sumItem = 0
    //     state.cart.map((item)=>{
    //         return sumItem = sumItem + item.quantity
    //     })
    //     return console.log({...state,amountItem: sumItem});
    // }
    useEffect(()=>{
        // empty cart
        if(state.cart.length === 0){
            setIsEmpty(true)
        }
        //adjust amountItem
        dispatch({type:"ADJUST_AMOUNT_ITEM"})
        //adjust balance
        dispatch({type:'ADJUST_BALANCE'})
    },[state.cart])
    return(
        <DataContext.Provider value={{...state,changeAmount,delItem,isEmpty,formatNumber,inputAmount}}>
            {children}
        </DataContext.Provider>
    )
}
export const DataContext = createContext()
export default DataProvider;