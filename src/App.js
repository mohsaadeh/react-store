import logo from './logo.svg';
import './style.css';
import data from './data.json'
import React,{useState} from 'react';
function App() {
  const [searchTerm,setSearchTerm]=useState("");
  return (
    <>
        <div className="lineTop">
        <div className="line1">
        </div>
        <div className="line2">
        </div>
    </div>



 
    


    <div className="logoHeader">
      <a href='#'>
      <img src="http://ahmad4d-003-site7.ftempurl.com/image/Asset-2-1.png" alt=""/>
      </a>
    </div>
<div className='headernav'>
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
</div>

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
               <button  type="submit">
                   Select options
                </button>
         </div>   
              </div>
              
          )
         }) 
        }
 

    </div>
    </>
    
  );
}

export default App;
