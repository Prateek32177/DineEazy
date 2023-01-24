import React from "react"
import QuantityCounter from "./Quantitybutton"

export default function AddedItemCard(props){

    const {itemName} = props
    return(
        <>
            <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "15px 0px",
                }}
              >
                <p>{itemName}</p>
                <QuantityCounter />
              </div>
        
        </>
    )
}