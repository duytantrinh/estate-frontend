import {useContext, useEffect, useRef, useState} from "react"
import "./Chat.scss"
import {AuthContext} from "../../context/AuthContext"
import apiRequest from "../../lib/apiRequest"
import {format} from "timeago.js"

import {useNotificationStore} from "../../lib/notificationStore"

const Chat = ({chats}) => {
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>

        <div
          className="message"
          style={{
            backgroundColor: "#559ef6",
          }}
        >
          <img src="/noavatar.jpg" alt="avatar receiver" />
          <span>Test</span>
          <p>test message</p>
        </div>
      </div>

      <div className="chatBox">
        <div className="top">
          <div className="user">
            <img src="/noavatar.jpg" alt="user image" />
            User 1
          </div>
          <span className="close">X</span>
        </div>

        <div className="center">
          <div
            className="chatMessage"
            style={{
              alignSelf: "flex-start",
              textAlign: "right",
              backgroundColor: "white",
            }}
          >
            <p>Message 1</p>
            <span>2 minutes ago</span>
          </div>
        </div>

        <form className="bottom">
          <textarea name="text"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Chat
