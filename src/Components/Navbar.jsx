import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/reat.jpg";
import { Cart, Chat, Notification, UserProfile } from "./index";
import { useStateContext } from "../contexts/ContextProvider";
import { icons } from "react-icons/lib";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent position="BottomCenter" content={title}>
    <button
      type="button"
      onClick={customFunc}
      style={{ color: color }}
      className=" relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      {" "}
      <span
        style={{ background: dotColor }}
        className=" absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
  />
        {icon}
      
    </button>
  </TooltipComponent>
);

function NavBar() {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setiIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor
  } = useStateContext();
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    // return removeEventListener in useEffect when window is resized
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title=" Cart"
          dotColor="#03c9d7"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={< BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor="#03c9d7"
          customFunc={() => handleClick("netifications")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent position="BottomCenter" content="Profile">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img className="rounded-full w-8 h-8 object-contain " src={avatar} alt="avatar" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 font-bold text-14">Refat</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.chat && <Cart />}
        {isClicked.cart && <Chat />}
        {isClicked.netifications && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
}

export default NavBar;
