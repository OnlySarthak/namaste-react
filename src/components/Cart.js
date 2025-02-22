import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/Storage Slices/cartSlice";

const Cart = ()=>{
    
    const dispacher = useDispatch();

    const itemCards = useSelector((state) => state.cart.items);
    console.log(itemCards);

    return (
        <div>
            <div className="fs-1 text-start container">
                cart
                <button className="btn btn-warning text-white text-bold"
                onClick={()=>{
                    dispacher(clearCart())
                }}>
                    Clear Cart
                </button>
            </div>
            <div className="container p-4 border border-secondary-subtle rounded">
                
                {itemCards.length == 0 ? "Cart Is empty" : 
                (itemCards.map((item) => (                                        
                    <div key={item?.card?.info?.id}>
                        <div className="d-flex justify-content-between">
                            <h5>{item?.card?.info?.name}</h5>
                            {/* <button className="btn btn-warning" onClick={()=>handleAddToCart(item)}>Add To Cart</button> */}
                        </div>
                        <strong>₹{(item?.card?.info?.price)/100}</strong>
                        <p>{item?.card?.info?.description}</p>
                        <hr></hr>
                    </div>
                ))) }
            </div>
        </div>
    )
}

export default Cart;