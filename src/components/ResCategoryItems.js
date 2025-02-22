import { useDispatch } from "react-redux";
import { addItem } from "../utils/Storage Slices/cartSlice";

const ResCategoryItems = (data)=>{

    const Dispatch = useDispatch()

    const handleAddToCart = (item)=>{
        Dispatch(addItem(item));
    }
    
    const {itemCards} = data?.data;
    
    return (
        <div>
            {itemCards.map((item) => (
                <div key={item?.card?.info?.id}>
                    <div className="d-flex justify-content-between">
                        <h5>{item?.card?.info?.name}</h5>
                        <button className="btn btn-warning" onClick={()=>handleAddToCart(item)}>Add To Cart</button>
                    </div>
                    <strong>₹{(item?.card?.info?.price)/100}</strong>
                    <p>{item?.card?.info?.description}</p>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}

export default ResCategoryItems;