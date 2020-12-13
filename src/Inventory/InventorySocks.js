import React, { useState, useEffect } from 'react';
import Socks from "./Socks.jpg"
import './Inventory.css'

function InventorySocks (){

    const[SocksCount, useSocksCount]= useState(91);
       const[soldCount, useSoldCount]= useState(1); 
            
   
        return (
            <div className="containerInventory">
                <div className="Style">
                <img src={Socks} alt="Socks" />
                <h3>Available Socks: {SocksCount-soldCount}</h3>
                <h4>Sold Socks: {soldCount}</h4>
                <div className="addMinus">
                    <button onClick={() => useSoldCount(soldCount+1)}> + </button>
                    <button onClick={() => useSoldCount(soldCount-1)}> - </button>
                </div>
                <button onClick={() => useSoldCount(1)}> Reset </button>
            </div>
            </div>
        )
    

}
export default InventorySocks;


