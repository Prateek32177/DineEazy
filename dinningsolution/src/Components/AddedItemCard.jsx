import React from "react"
import QuantityCounter from "./Quantitybutton"
import { addedItemCard } from "./StyleObject/Styles"
export default function AddedItemCard(props){

    const {detail} = props
    return(
        <>
            <div
                style={addedItemCard}
              >
                <p>{detail.itemName}</p>
                <QuantityCounter detail={detail} dishName={detail.itemName} count={detail.quantity}/>
              </div>
        
        </>
    )
}