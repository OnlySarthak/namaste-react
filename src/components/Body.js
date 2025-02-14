import RestuaurantCard from "./RestuaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

let backUpData;

const Body = ()=>{
  
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState('');

  const [unfilter, setUnfilter] = useState(false);

  const [backUpData,setbackUpData] = useState([]);
  
  useEffect(()=>{
    fetchData();
  },[]);
  
  async function fetchData() {
    const data = await 
    fetch('https://thingproxy.freeboard.io/fetch/https://swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999998&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setbackUpData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  //conditional rendering
  return listOfRestaurants === null ? <Shimmer/>
  :(
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
               setListOfRestaurants(filterdData);
               setUnfilter(true)
            }}>search</button>

            {unfilter && (
                <button 
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
            <Link to={"/restaurant/" + card.info.id }  key={card.info.id} >
              <RestuaurantCard resData={card} />
            </Link>
          ))
        }  
        </div>
      </div>
    )
}

export default Body;
