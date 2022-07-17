
// CSS
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// 3rd Party Modules
import Tooltip from "react-simple-tooltip";
// Icons
import { allbags, bookmark, bookmarkmini, duffleBag, halfbag, handbag, laptopsleeve, messengerbag, search, shoppingbag, slingbag, totebag, useralt, vanitypouch, vector } from './Assets/Icons';
import { Cart } from './Assets/Images';
import './CSS/App.css';




// Components

const API_URL = "https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json"
function App() {
  const [products, setProducts]= useState([])


  const fetchData = async () => {
    const  data = await axios.get(API_URL);
    setProducts(data.data.data.products);
  };

  // Trigger the fetchData after the initial render by using the useEffect hook
  
  useEffect(() => {
    fetchData();
  }, []);
console.log(products)
  return (
    <div className="main">
      <div className="header">
        <div>
          <p> T A N N &nbsp;&nbsp;&nbsp; T R I M </p>
        </div>
        <div className="header-Right-bar">
        <Tooltip 
        content='search'
        placement="bottom"
        padding={4}>
            <img style={{ marginRight: '10px' }} src={search} />
            
          </Tooltip>
          <Tooltip 
        content='profile'
        placement="bottom"
        padding={4}>
            <img style={{ marginRight: '10px' }} src={useralt} />
            
          </Tooltip>

          <Tooltip 
        content='bookmark'
        placement="bottom"
        padding={4}>
            <img style={{ marginRight: '10px' }} src={bookmarkmini} />
            
          </Tooltip>
          <Tooltip 
        content='cart'
        placement="bottom"
        padding={4}>
            
            <img src={shoppingbag} /> 
          </Tooltip>          
          
          
        </div>
      </div>
      <div className="Row-0">
        <text> Bags </text>
        <text> Travel </text>
        <text> Assesories </text>
        <text> Gifting </text>
        <text> Jewelery </text>
      </div>
      <div className="Types">
        <div className="image-container-top">
          <img className="slider-image" src={allbags} />
          <p> All Bags </p>
        </div>
        <div className="image-container-top">
          <img className="slider-image" src={vanitypouch} />
          <p> Vanity pouch </p>
        </div>
        <div className="image-container-top">
          <img className="slider-image" src={totebag} />
          <p> Tote Bag </p>
        </div>
        <div className="image-container-top">
          <img className="slider-image" src={duffleBag} />
          <p> Duffle Bag </p>
        </div>
        <div className="image-container-top">
          <img className="slider-image" src={laptopsleeve} />
          <p> Laptopsleeve </p>
        </div>
        <div className="image-container-top">
          <img className="slider-image" src={messengerbag} />
          <p> Messenger Bags </p>
        </div>
        <div className="image-container-top">
          <img className="slider-image" src={slingbag} />
          <p> Sling Bags </p>
        </div>
        <div className="image-container-top">
          <img className="slider-image" src={handbag} />
          <p> Hand Bags </p>
        </div>
        <div className="image-container-top">
          <img className="slider-image" src={halfbag} />
          <p> Buck </p>
        </div>
      </div>
      <div>
      </div>
      <div className="category-product-container">
        <p style={{ color: "white" }}> Bags.Bagpacks </p>
        <div className="vector">
          <p style={{ color: "white", textAlign: "end", paddingRight: "10px" }} > 13 products </p>
          <img style={{ height: "25px", marginLeft: "10px" }} src={vector} />
        </div>

      </div>
      <div className='products'>
     {products.map((item)=>(


  <div className="image-container">
         <div className="image-container-2">
            <img src={item.image[0]} /> 
         </div>
        
          {/* <Tooltip 
          content="Bookmark"
          > */}
          <img className="bookmark" src={bookmark} />
          {/* </Tooltip> */}
          
          <p style={{ color: "white" }}> {item.name} </p>
          <div className="price-cart">
            <div className="price-tag">
              <p> ₹ {item.special_price_usd} </p>
              <p style={{ paddingLeft: "10px", textDecoration:"line-through" }}> {item.special_price} </p>
              <p style={{ paddingLeft: "5px", color: "green" }} > 50%(off) </p>
            </div>
            <div>
              <Tooltip 
              content="add"
              padding={2}>
              <img src={Cart} />
              </Tooltip>
              
            </div>
          </div>

        </div> 

     ))}
  
       
      </div>
    </div>


  );
}

export default App;
