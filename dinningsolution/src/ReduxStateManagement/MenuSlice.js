import { createSlice } from '@reduxjs/toolkit'
import img1 from "../images/food.png";
import img2 from "../images/hamburger.png";
import img3 from "../images/pizza.png";
import img4 from "../images/spaguetti.png";

const RestaurantDetails = {
    name:"Hard Rock Cafe and Restaurant",
    googleMapLink:"",
    InstagramLink:"",
    facebookLink:"",
    contactNo:"",
    Email:"",
    foodType:""
}

const menuCard = [
    {
      itemName: "Burger",
      itemPrice: 299,
      img: img1,
      type:'Veg',
      category:"Starter",
      quantity:0,
      descp:''
    },
    {
        itemName: "Burger2",
        itemPrice: 299,
        img: img1,
        type:'Veg',
        category:"Starter",
        quantity:0,
        descp:''
      },
    {
      itemName: "Pizza",
      itemPrice: 399,
      img: img2,
      type:'Veg',
      category:"Chinese",
      quantity:0,
      descp:''
    },
    {
      itemName: "Chole Bhature",
      itemPrice: 299,
      img: img3,
      type:'Veg',
      category:"Continential",
      quantity:0,
      descp:''
    },
    {
      itemName: "Pav Bhaji",
      itemPrice: 199,
      img: img4,
      type:'Veg',
      category:"Main Course",
      quantity:0,
      descp:''
    },
    {
      itemName: "vada pav",
      itemPrice: 299,
      img: img1,
      label:"Beverages",
      category:"Main Course",
      quantity:0,
      descp:''
    },
    {
      itemName: "lassi",
      itemPrice: 399,
      img: img2,
      type:'Veg',
      category:"Main Course",
      quantity:0,
      descp:''
    },
    {
      itemName: "icecream",
      itemPrice: 299,
      img: img3,
      type:'Veg',
      category:"Starter",
      quantity:0,
      descp:''
    },
    {
      itemName: "chole tikiya",
      itemPrice: 199,
      img: img4,
      type:'Veg',
      category:"Continential",
      quantity:0,
      descp:''
    },
  ];

const initialState = {
  addedItems:[],
  menuList:menuCard,
  searchList:menuCard
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.menuList.filter((menu)=>(
        menu.itemName===action.payload
      )).forEach(val=>val.quantity +=1)
  
    },
    decrement: (state,action) => {
        state.menuList.filter((menu)=>(
            menu.itemName===action.payload
          )).forEach(val=>val.quantity -=1)
    },
    add: (state,action) => {
        state.menuList.filter((menu)=>(
            menu.itemName===action.payload
          )).forEach(val=>val.quantity =1)
    },
    addItemList:(state)=>{
        state.addedItems=state.menuList.filter((menu)=>(
            menu.quantity>0))
    },
    searchItems:(state,action)=>{
        // state.menuList=state.menuList.filter((menu)=>(
        //     menu.itemName.toLowerCase().includes(action.payload)
if(action.payload==="")
{
     
    state.menuList =state.searchList
}
else
{
    state.menuList = 
        state.menuList.filter((menu)=>(
            menu.itemName.toLowerCase().includes(action.payload)
    ))
}
        
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, add,addItemList,searchItems } = counterSlice.actions

export default counterSlice.reducer