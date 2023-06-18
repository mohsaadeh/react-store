import React from 'react';
import '../style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faShoppingCart, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';

import image from '../images/here.png';

const ImageSlider = () => {
  return (
    <div className="image-search-component">
      <div className="image-container">
        <img src={image} alt="Image"/>
        <div className="search-box">
        <p style={{color:'#467989'}}>SUMMER COLLECTION</p>
        <h1>Fall - Winter</h1>
        <h1>Collections 2023</h1>
        <p style={{fontSize:'14px'}}>A specialist label creating luxury essentials. Ethically crafted with an unwavering
commitment to exceptional quality.</p>
        <button className='btnStyle'>Shop Now</button>
        </div>
      </div>
    </div>
  );
};
  
  export default ImageSlider;