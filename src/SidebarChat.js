import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'
function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Joshua </h2>
                <p>Goodevening sir</p>
            </div>
        </div>
    )
}

export default SidebarChat
