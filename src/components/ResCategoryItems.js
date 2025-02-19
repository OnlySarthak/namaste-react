const ResCategoryItems = (data)=>{
    // console.log(data.data.itemCards[0].card.info.name);
    
    const {itemCards} = data?.data;
    
    console.log(itemCards[0].card.info);
    
    return (
        <div>
            {itemCards.map((item) => (
                <div key={item?.card?.info?.id}>
                    {/* <h5>{item?.card?.info?.name}</h5>
                    <p>₹{(item?.card?.info?.price)/100}</p>
                    <h6>{item?.card?.info?.description}</h6>
                    <hr></hr> */}
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