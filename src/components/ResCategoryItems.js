const ResCategoryItems = (data)=>{
    
    const {itemCards} = data?.data;
    
    return (
        <div>
            {itemCards.map((item) => (
                <div key={item?.card?.info?.id}>
                    <h5>{item?.card?.info?.name}</h5>
                    <strong>₹{(item?.card?.info?.price)/100}</strong>
                    <p>{item?.card?.info?.description}</p>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}

export default ResCategoryItems;