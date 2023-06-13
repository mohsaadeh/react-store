import React,{useState} from 'react';
import './style.css';
import data from './data.json'
import {Link} from 'react-router-dom'

const Items = () => {
    const [searchTerm,setSearchTerm]=useState("");
    return (
      <>
 
  

  {/* <div className='headernav'>
  <div className='SearchTop'>
      <div className='SearchDiv'>
        <input id='searchInput' type='text' className='textSearch' placeholder='Search here' onChange={(event)=> {
          setSearchTerm(event.target.value);
        } } />
              <button class="btnSearch" type="submit">
                      <i class="las la-search"></i>s
                  </button>
      </div>
      </div>
  </div> */}
  
  <div class="flex-grid-card">
  
          {
            data.filter((val) => {
              if(searchTerm==""){
                return val
              }
              else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
              }
            })
           .map((val)=>{
            return (
  
  
      
  
  
              <div className='flex-grid-card-items' key={val.id}>
  
                <img src={val.image} alt='Empty Image'></img>
                <h3 className="flex-grid-card-title">{val.title}</h3>
                <p className='flex-grid-card-price'>{val.price}</p>
         
                <div className="flex-grid-card-btn">
                    <Link to="/12">
                    <button  type="submit">
                     Select options
                    </button>
                    </Link>
           </div>   
                </div>
                
            )
           }) 
          }
   
  
      </div>
      </>
      
    );
};

export default Items;
