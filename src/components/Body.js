import RestuaurantCard,{HOC} from "./RestuaurantCard";
import { useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListOfRestaurant from "../utils/useListOfRestaurant";

const Body = ()=>{

  const PromotedRestaurantCard = HOC(RestuaurantCard);

  const [searchText, setSearchText] = useState('');
  
  const [unfilter, setUnfilter] = useState(false);
  
  const {listOfRestaurants, setListOfRestaurants, backUpData} = useListOfRestaurant();

  //conditional rendering
  return listOfRestaurants.length == 0 ?  <Shimmer/> : (
      <div className="Body">
        <div className="filter container">
          <div className="search d-flex">

            <input placeholder="Whats on your mind?" type="text" className="search-box form-control" value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value)
            }}/>

            <button className="btn btn-primary" 
            onClick={()=> {
               const filterdData = backUpData.filter
                          ((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));              

              if(filterdData.length != 0){
                setUnfilter(true)
                setListOfRestaurants(filterdData);
              }
                              
            }}>search</button>

            {unfilter && (
                <button 
                className="btn btn-primary"
                style={{marginLeft: 5 + 'px'}}
                onClick={()=>{
                  setUnfilter(false);
                  setListOfRestaurants(backUpData);
                }}>
                  {searchText}<span>❌</span>
                </button>
            )}

          </div>
           <button className="filter-btn btn btn-secondary " onClick={()=>{
                const filterdData = backUpData.filter(
                  (res)=> res?.info?.avgRating > 4.5
                )
                setListOfRestaurants(filterdData);
                console.log(filterdData);
                
           }}>
            Top Rated Restuaurant
           </button>
        </div>
        <div className="res-container">
        {
          listOfRestaurants.map((card) => (
            <Link to={"/restaurant/" + card.info.id }  key={card.info.id} style={{ textDecoration: "none", color: "inherit" }}>
              <PromotedRestaurantCard resData={card} temp={1}/>
            </Link>
          ))
        }  
        </div>
      </div>
    )
}

export default Body;
