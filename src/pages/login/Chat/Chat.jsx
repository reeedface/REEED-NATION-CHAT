import React from 'react';
import './Chat.css';

import ChatBox from '../../../components/ChatBox/ChatBox';

import LeftSidebar from '../../../components/leftSidebar/leftSidebar';
import RightSidebar from '../../../components/rightSidebar/rightSidebar';


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftSidebar />
        <ChatBox />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Chat;
