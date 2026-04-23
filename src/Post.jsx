import React,{useState} from 'react'
import Avatar from '@mui/material/Avatar';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

import "./Post.css"
const Post = ({displayName,text,image,id,removePost}) => {
  const[likes,setLikes]=useState(0)
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </div>
      <div className="post_body">
        <div className="post_head">
            <div className="post_headText">
                 <h3>{displayName}</h3>
            </div>
            <div className="post_headDescription">
                <p>{text}</p>
            </div>
      </div>
        
        
      {image && <img src={image} alt="Building Twitter "  />}
      <div className="post_footer">
            <ChatBubbleIcon fontSize="small" />
            <div onClick={()=>setLikes(likes+1)} style={{cursor:"pointer"}}>
              <FavoriteBorderIcon fontSize="small" />{likes}
            </div>
            <button onClick={()=>removePost(id)}>
              Delete
            </button>
            <PublishIcon fontSize="small" />
      </div>
    </div>
    </div>

  )
}

export default Post