import { Avatar, IconButton } from '@material-ui/core';
import  DonutLargeIcon from '@material-ui/icons/DonutLarge';
import React from 'react'
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./Sidebar.css";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebar__header">
          <Avatar src="https://www.clipartmax.com/png/middle/145-1457410_luffy-by-sartorelli-drawing-luffy-2-years-later.png" />
          <div className="sidebar__headerRight">
            <IconButton className="MuiSvgIcon-root">
              <DonutLargeIcon />
            </IconButton>
            <IconButton className="MuiSvgIcon-root">
              <ChatIcon />
            </IconButton>
            <IconButton className="MuiSvgIcon-root">
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>

        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <SearchOutlined />
            <input placeholder="Search or start new chat" type="text" />
          </div>
        </div>

        <div className="sidebar__chats">
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
        </div>
      </div>
    );
}

export default Sidebar
