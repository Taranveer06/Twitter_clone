import React from 'react'
import Avatar from '@mui/material/Avatar';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

import "./Post.css"
const Post = ({ displayName, username, verified, text, image, avatar }, ref) => {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </div>
      <div className="post_body">
        <div className="post_head">
            <div className="post_headText">
                 <h3>Raftar </h3>
            </div>
            <div className="post_headDescription">
                <p>Builting Twitter clone using react</p>
            </div>
      </div>
        
        
      <img src="https://media.giphy.com/media/l3q2K5jinAlChoCLS/200w.gif" alt="Building Twitter "  />
      <div className="post_footer">
            <ChatBubbleIcon fontSize="small" />

            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
      </div>
    </div>
    </div>

  )
}

export default Post
