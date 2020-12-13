import React, { useState, useEffect } from 'react';
import SnowSet from "./SnowSet.jpg";
import './Inventory.css';


function InventorySnowSet() {
    const [availableSet, useAvailableSet] = useState(54);
    const [soldSet, setSoldSet] = useState(4);


    return (
        <div className="containerInventory">
            <div className="Style">
                <img src={SnowSet} alt="SnowSet" />
                <h3>Available Snow Sets: {availableSet-soldSet}</h3>
                <h4>Sold Snow Sets: {soldSet}</h4>
                <div className="addMinus">
                    <button onClick={() =>setSoldSet(soldSet+4)}> + </button>
                    <button onClick={() => setSoldSet(soldSet-4)}> - </button>
                </div>
                <button onClick={() => setSoldSet(4)}> Reset </button>
            </div>

        </div>



    )

}

export default InventorySnowSet;