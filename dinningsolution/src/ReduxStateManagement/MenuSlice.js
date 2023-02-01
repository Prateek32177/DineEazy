import { createSlice } from "@reduxjs/toolkit";
import img1 from "../images/food.png";
import img2 from "../images/hamburger.png";
import img3 from "../images/pizza.png";
import img4 from "../images/spaguetti.png";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../Services/Firebase/FirebaseConfig";

const RestaurantDetails = {
  name: "Hard Rock Cafe and Restaurant",
  googleMapLink: "",
  InstagramLink: "",
  facebookLink: "",
  contactNo: "",
  Email: "",
  foodType: "",
};

 export function addToFirebase(e){
      console.log("checking...")
      try {
          const docRef =  addDoc(collection(db, RestaurantDetails.name), {
           FoodMenu:menuCard
          });

          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }

  }

  // useEffect(()=>{
  //   readfirebase();
  // },[input])
  // function handleChange(e){
  //     setInput(e.target.value)
  // }

  // const menuList = []
  //  function readfirebase(){  console.log("hello");
  //   getDocs(collection(db, "testing1")).then((querySnapshot)=>
  //   querySnapshot.forEach((doc) => {
  //     menuList=doc.data().FoodMenu
  //   console.log("hello",`${doc.id} => ${doc.data().restaurantName}`);
  // }))

  // }


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
    }

  ];
  
const menuCard = [
  {
    itemName: "Burger",
    itemPrice: 299,
    img: img1,
    type: "Veg",
    category: "Starter",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Burger2",
    itemPrice: 299,
    img: img1,
    type: "Veg",
    category: "Starter",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Pizza",
    itemPrice: 399,
    img: img2,
    type: "Veg",
    category: "Chinese",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Chole Bhature",
    itemPrice: 299,
    img: img3,
    type: "Veg",
    category: "Continential",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Pav Bhaji",
    itemPrice: 199,
    img: img4,
    type: "Veg",
    category: "Main Course",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "vada pav",
    itemPrice: 299,
    img: img1,
    label: "Beverages",
    category: "Main Course",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "lassi",
    itemPrice: 399,
    img: img2,
    type: "Veg",
    category: "Main Course",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "icecream",
    itemPrice: 299,
    img: img3,
    type: "Veg",
    category: "Starter",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "chole tikiya",
    itemPrice: 199,
    img: img4,
    type: "Veg",
    category: "Continential",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Mojito",
    itemPrice: 199,
    img: img4,
    type: "Veg",
    category: "Beverages",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Maggi",
    itemPrice: 199,
    img: img4,
    type: "Veg",
    category: "Continential",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Coco Cola",
    itemPrice: 199,
    img: img4,
    type: "Veg",
    category: "Beverages",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Tea",
    itemPrice: 199,
    img: img4,
    type: "Veg",
    category: "Beverages",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Veg Momos",
    itemPrice: 199,
    img: img4,
    type: "Veg",
    category: "Starter",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Spring Roll",
    itemPrice: 199,
    img: img4,
    type: "Veg",
    category: "Chinese",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Chilli Paneer",
    itemPrice: 199,
    img: img4,
    type: "Veg",
    category: "Chinese",
    quantity: 0,
    descp: "",
  },
  {
    itemName: "Manchurian",
    itemPrice: 199,
    img: img4,
    type: "Veg",
    category: "Chinese",
    quantity: 0,
    descp: "",
  },
];

const initialState = {
  addedItems: [],
  menuList: menuCard,
  searchList: menuCard,
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
        menu.itemName.toLowerCase().includes(action.payload)
      );
      let result = replaceObjects(state.searchList, filtered, 'itemName');

      if (action.payload === "") {
        state.menuList = result;
      } else {
        state.menuList = filtered;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, add, addItemList, searchItems } =
  counterSlice.actions;

export default counterSlice.reducer;
