import React from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector } from "react-redux";

const iconStyle = {
  width: "25px",
  height: "25x",
  padding: "10px",
  filter: "drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.4))",
};
function NavigateButton(props) {

    const {path,buttonName,additionalStyle} = props
    const toggled = useSelector((state) => state.Counter.themeToggle);
  const Navigate = useNavigate();
  const handleMenu = () => {
    Navigate(path);
 window.scrollTo({top:0,left:0,behavior:"smooth"})
  };
  return (
    <>
      <button
        className={
            toggled
            ? "sidenavButton sidenavButtonOrange"
            : "sidenavButton sidenavButtonViolet"
        }
        onClick={handleMenu}
        style={additionalStyle}
      >
        {buttonName?buttonName:<HomeIcon style={iconStyle} />}
      </button>
    </>
  );
}

export default NavigateButton;
