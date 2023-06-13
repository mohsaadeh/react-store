import React,{useState} from 'react';
import './style.css';

const Navigation = () => {
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
    <nav>

        <ul class="nav-links">
            <a to="home.aspx">Home</a>
            <a to="home.aspx">Shop</a>
            <a to="home.aspx">About</a>
            <a to="home.aspx">Contact</a>
        </ul>

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



        <div className="burger">
            <i className="las la-bars"></i>
        </div>
    </nav>
    </>
  );
};

export default Navigation;
