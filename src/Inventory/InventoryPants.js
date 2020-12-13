import React, { useState, useEffect } from 'react';
import Pant from './Pant.jpg';
import './Inventory.css';
function InventoryPants() {

    const [availablePants, setAvailablePants] = useState(52);
    const [soldPants, setSoldPants] = useState(2);


    return (

        <div className="containerInventory">
            <div className="Style">
                <img src={Pant} alt="Pants" />
                <h3>Available Pants: {availablePants-soldPants}</h3>
                <h4>Sold pants: {soldPants}</h4>

                <div className="addMinus">
                    <button onClick={() => setSoldPants(soldPants+2)}> + </button>
                    <button onClick={() => setSoldPants(soldPants-2)}> - </button>
                </div>
                <button onClick={() => setSoldPants(2)}> Reset </button>


            </div>
        </div>

    )
}

export default InventoryPants;