import React, { useState, useEffect } from 'react';
import Red from "./Red.jpg"
import './Inventory.css'

function InventoryJacket() {

    const [count, setCount] = useState(100);
    const [soldCount, setSoldCount] = useState(0);

useEffect(() => {
    console.log("Component did mount");
})

    return (
        <div className="containerInventory">
            <div className="Style">
                <img src={Red} alt="Jacket" />
                <h3>Available Jackets: {count-soldCount}</h3>
                <h4>Sold Jackets: {soldCount}</h4>
                <div className="addMinus">
                    <button onClick={() => setSoldCount(soldCount+1)}> + </button>
                    <button onClick={() => setSoldCount(soldCount-1)}> - </button>
                </div>
                <button onClick={() => setSoldCount(0)}> Reset </button>
            </div>
        </div>
    )
}


export default InventoryJacket;


