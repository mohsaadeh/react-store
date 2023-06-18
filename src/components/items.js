import React,{useState} from 'react';
import '../style/style.css';
import itemsData from '../data/itemsData.json'
// import {Link} from 'react-router-dom'


    // const [searchTerm,setSearchTerm]=useState("");

    const Items = () => {
      const [searchTerm, setSearchTerm] = React.useState('');
      const filteredData = itemsData.data.filter((item) =>
        item.item.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
      return (
        <div>
          <div style={{width:'100%',display:'flex'}}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            margin: '20px auto',
            width: '50%',
          }}
        />

</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px',width:'80%',margin:'50px auto' }}>
          {filteredData.map((item) => (
            <div key={item.content_id} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
              <img src={item.image} alt={item.item} style={{ width: '100%', marginBottom: '10px' }} />
              <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{item.item}</h3>
              <p style={{ marginBottom: '10px' }}>{item.details}</p>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Price: ${item.price}</p>
              <p>Category: {item.category}</p>
              {/* <Link to="/Hdd"> */}
              <button className='btnStyle'>
              +  Add to Cart 
    </button>
    {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
      );
    };
    
    export default Items;


