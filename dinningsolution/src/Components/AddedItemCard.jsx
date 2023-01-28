import React from "react"
import QuantityCounter from "./Quantitybutton"

export default function AddedItemCard(props){

    const {detail} = props
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
                <p>{detail.itemName}</p>
                <QuantityCounter detail={detail} dishName={detail.itemName} count={detail.quantity}/>
              </div>
        
        </>
    )
}