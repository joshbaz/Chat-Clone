import { Avatar, IconButton } from '@material-ui/core'
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { MoreVert, SearchOutlined, AttachFile } from "@material-ui/icons";
import React from 'react'
import './Chat.css'

function Chat() {
    return (
      <div className="chat">
        <div className="chat__header">
          <Avatar />

          <div className="chat__headerInfo">
            <h3> Joshua bazooba</h3>
            <p>Last seen at 5:00pm</p>
          </div>

          <div className="chat__headerRight">
            <IconButton >
              <SearchOutlined />
            </IconButton>
            <IconButton >
              <AttachFile />
            </IconButton>
            <IconButton >
              <MoreVert />
            </IconButton>
          </div>
        </div>
      </div>
    );
}

export default Chat
