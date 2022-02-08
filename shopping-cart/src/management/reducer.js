// control action in the app
const reducer = (state,action) =>{
    // eslint-disable-next-line default-case
    switch (action.type) {

        case 'CHANGE_AMOUNT':
            let newCart = state.cart.map((item)=>{
                if(action.payload.id === item.id){
                    if(action.payload.type === "increment"){
                        return {...item, quantity: item.quantity + 1}
                    }else if(action.payload.type === "decrement"){
                        return{...item,quantity: item.quantity - 1 }
                    }
                }
                return item;  // return the item is not true with condition id
            }).filter((item)=>item.quantity !== 0 ) // filter the item that it is decreased to 0
        return {...state,cart:newCart};

        case 'INPUT_AMOUNT':
            let newCart2 = state.cart.map((item)=>{
                if(action.payload.id === item.id){
                    return {...item,quantity:+action.payload.value};
                }
                return item
            })
            
        return{...state,cart:newCart2}
        
        case 'DEL_ITEM': return {...state,cart:state.cart.filter((item)=>item.id !== action.payload.id)};
        
        case 'ADJUST_AMOUNT_ITEM':
            let sumItem = 0
            state.cart.map((item)=>{
                return sumItem = sumItem + item.quantity
            })
        return {...state,amountItem: sumItem};

        case 'ADJUST_BALANCE':
            let sumBalance = 0
            state.cart.map((item)=>{
                return sumBalance = sumBalance + (item.price * item.quantity)
            })
        
        return {...state,balance:sumBalance};

    }
}

export default reducer