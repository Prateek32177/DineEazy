import {render,screen} from "@testing-library/react";
import React from "react"
import Logo from "./Components/Logo";


describe("App Logo testing",()=>{

it('rebders logo',()=>{
  render(<Logo/>);
  screen.debug();
})

})