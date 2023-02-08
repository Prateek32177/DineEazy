import { createSlice } from "@reduxjs/toolkit";
import img1 from "../images/food.png";
import img2 from "../images/hamburger.png";
import img3 from "../images/pizza.png";
import img4 from "../images/spaguetti.png";

export const tabDescp = [
  {
    label: "Starter",
  },
  {
    label: "Chinese",
  },
  {
    label: "Continential",
  },
  {
    label: "Main Course",
  },
  {
    label: "Beverages",
  },
];

let menuCard = [
  {
    itemName: "Burger",
    itemPrice: 299,
    img: img1,
    type: 0,
    category: "Starter",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Burger2",
    itemPrice: 299,
    img: img1,
    type: 0,
    category: "Starter",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Pizza",
    itemPrice: 399,
    img: img2,
    type: 1,
    category: "Chinese",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Chole Bhature",
    itemPrice: 299,
    img: img3,
    type: 0,
    category: "Continential",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Pav Bhaji",
    itemPrice: 199,
    img: img4,
    type: 0,
    category: "Main Course",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Vada pav",
    itemPrice: 299,
    img: img1,
    type: 1,
    label: "Beverages",
    category: "Main Course",
    quantity: 0,
    descp: "",
  },
  {
    itemName: ":Lassi",
    itemPrice: 399,
    img: img2,
    category: "Main Course",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Ice-Cream",
    itemPrice: 299,
    img: img3,
    category: "Starter",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Chole Tikiya",
    itemPrice: 199,
    img: img4,
    type: 0,
    category: "Continential",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Mojito",
    itemPrice: 199,
    img: img4,
    category: "Beverages",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Maggi",
    itemPrice: 199,
    img: img4,
    type: 1,
    category: "Continential",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Coco Cola",
    itemPrice: 199,
    img: img4,
    category: "Beverages",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Tea",
    itemPrice: 199,
    img: img4,
    category: "Beverages",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Veg Momos",
    itemPrice: 199,
    img: img4,
    type: 1,
    category: "Starter",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Spring Roll",
    itemPrice: 199,
    img: img4,
    type: 1,
    category: "Chinese",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Chilli Paneer",
    itemPrice: 199,
    img: img4,
    type: 0,
    category: "Chinese",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Manchurian",
    itemPrice: 199,
    img: img4,
    type: 1,
    category: "Chinese",
    quantity: 0,
    descp: "",
  },
];

const initialState = {
  addedItems: [],
  menuList: menuCard,
  searchList: menuCard,
  tabDescp:tabDescp,
  themeToggle:false,
  themeColor:"#7C40FF"
};

function replaceObjects(arr1, arr2, prop) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i][prop] === arr2[j][prop]) {
        arr1[i] = arr2[j];
      }
    }
  }
  return arr1;
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setMenuList: (state, action) => {
      state.menuList = action.payload;
      state.searchList = action.payload;
    },
    setTabDescp:(state,action)=>{
        state.tabDescp = action.payload
    },
    increment: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.menuList
        .filter((menu) => menu.itemName === action.payload)
        .forEach((val) => (val.quantity += 1));
    },
    decrement: (state, action) => {
      state.menuList
        .filter((menu) => menu.itemName === action.payload)
        .forEach((val) => (val.quantity -= 1));
    },
    add: (state, action) => {
      state.menuList
        .filter((menu) => menu.itemName === action.payload)
        .forEach((val) => (val.quantity = 1));
    },
    addItemList: (state) => {
      state.addedItems = state.menuList.filter((menu) => menu.quantity > 0);
    },
    searchItems: (state, action) => {
      let filtered = state.menuList.filter((menu) =>
        menu.itemName.toLowerCase().includes(action.payload.toLowerCase())
      );
      let result = replaceObjects(state.searchList, filtered, "itemName");

      if (action.payload === "") {
        state.menuList = result;
      } else {
        state.menuList = filtered;
      }
    },
    toggle:(state,action)=>{
 state.themeToggle = action.payload
    },
    toggleColor:(state,action)=>{
      state.themeColor = action.payload
         }
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  add,
  addItemList,
  searchItems,
  setMenuList,
  setTabDescp,
  toggle,
  toggleColor
} = counterSlice.actions;

export default counterSlice.reducer;
