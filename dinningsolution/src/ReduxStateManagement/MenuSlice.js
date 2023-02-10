import { createSlice } from "@reduxjs/toolkit";
import img5 from "../images/BubbleTea.svg";
import img2 from "../images/Cocktail.svg";
import img3 from "../images/Coffee.svg";
import img4 from "../images/Fries.svg";
import img1 from "../images/Pizza.svg";
import img6 from "../images/Pizza.svg";
import img7 from "../images/Sandwich.svg";
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
    descp: "Cheese Crispy Burger",
  },
  {
    itemName: "Burger2",
    itemPrice: 299,
    img: img5,
    type: 0,
    category: "Starter",
    quantity: 0,
    descp: "Only Burger",
  },
  {
    itemName: "Pizza",
    itemPrice: 399,
    img: img2,
    type: 1,
    category: "Chinese",
    quantity: 0,
    descp: "Country Cheese Special Pizza",
  },
  {
    itemName: "Chole Bhature",
    itemPrice: 299,
    img: img3,
    type: 0,
    category: "Continential",
    quantity: 0,
    descp: "Spicy Dish",
  },
  {
    itemName: "Pav Bhaji",
    itemPrice: 199,
    img: img4,
    type: 0,
    category: "Main Course",
    quantity: 0,
    descp: "Spiciest",
  },
  {
    itemName: "Vada pav",
    itemPrice: 299,
    img: img1,
    type: 1,
    label: "Beverages",
    category: "Main Course",
    quantity: 0,
    descp: "Maharahtra's Most famous",
  },
  {
    itemName: "Lassi",
    itemPrice: 399,
    img: img6,
    category: "Main Course",
    quantity: 0,
    descp: "Punjab Special lasi",
  },
  {
    itemName: "Ice-Cream",
    itemPrice: 299,
    img: img3,
    category: "Starter",
    quantity: 0,
    descp: "Top-Town Special Pistachio Ice cream",
  },
  {
    itemName: "Chole Tikiya",
    itemPrice: 199,
    img: img4,
    type: 0,
    category: "Continential",
    quantity: 0,
    descp: "Street Side",
  },
  {
    itemName: "Mojito",
    itemPrice: 199,
    img: img7,
    category: "Beverages",
    quantity: 0,
    descp: "Refreshing Drink",
  },
  {
    itemName: "Maggi",
    itemPrice: 199,
    img: img4,
    type: 1,
    category: "Continential",
    quantity: 0,
    descp: "Hill top Special",
  },
  {
    itemName: "Coca Cola",
    itemPrice: 199,
    img: img4,
    category: "Beverages",
    quantity: 0,
    descp: "Infamous Coca Cola",
  },
  {
    itemName: "Tea",
    itemPrice: 199,
    img: img6,
    category: "Beverages",
    quantity: 0,
    descp: "No Description everyone Knows",
  },
  {
    itemName: "Veg Momos",
    itemPrice: 199,
    img: img4,
    type: 1,
    category: "Starter",
    quantity: 0,
    descp: "Why Now Momos",
  },
  {
    itemName: "Spring Roll",
    itemPrice: 199,
    img: img5,
    type: 1,
    category: "Chinese",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Chilli Paneer",
    itemPrice: 199,
    img: img7,
    type: 0,
    category: "Chinese",
    quantity: 0,
    descp: "Spiciest dish",
  },
  {
    itemName: "Manchurian",
    itemPrice: 199,
    img: img6,
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
  tabDescp: tabDescp,
  themeToggle: false,
  themeColor: "#7C40FF",
  loader:true
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
    setTabDescp: (state, action) => {
      state.tabDescp = action.payload;
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
      state.loader = false
    },
    toggle: (state, action) => {
      state.themeToggle = action.payload;
    },
    toggleColor: (state, action) => {
      state.themeColor = action.payload;
    },
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
  toggleColor,
} = counterSlice.actions;

export default counterSlice.reducer;
