import React from "react";
import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";

function Sidebar() {
  return (
    <div className="sidebarContainer">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
}

export default Sidebar;
