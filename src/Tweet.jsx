import React,{useState} from 'react'
import "./Tweet.css"
import Avatar from '@mui/material/Avatar'
function Tweet({addPost}){
    const [text, setText] = useState("")
    const [image, setImage] = useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text==="")return
        addPost(text,image)
        setText("")
        setImage("")
    }
    return (
        <div className="tweet">
            <form onSubmit={handleSubmit}>
                <div className="tweet_input">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="What's happening" />
                <input value={image} onChange={(e)=>setImage(e.target.value)} className="tweet_imageinput" type="text" placeholder="Enter image URL" />
                </div>
                <button className="tweet_button">Tweet</button>
            </form>
        </div>
    )
}

export default Tweet