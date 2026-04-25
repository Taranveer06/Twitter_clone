import React,{useState} from 'react'
import "./Tweet.css"
import Avatar from '@mui/material/Avatar'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function Tweet({ addPost }) {
    const [text, setText] = useState("")
    const [image, setImage] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text === "") return
        addPost(text, image)
        setText("")
        setImage("")
    }
    return (
        <div className="tweet">
            <form onSubmit={handleSubmit}>
                <div className="tweet_input">
                    <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=You" />
                    <div className="tweet_inputField">
                        <div className='tweer_inputType'>
                            <input
                            type="text"
                            value={text}
                            style={{border:'none'}}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="What's happening?"
                        />
                        <input
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="tweet_imageinput"
                            type="text"
                            placeholder="Optional: Enter image URL"
                        />
                        </div>
                        
                        <div className="tweet_icons">
                            <div className="tweet_iconsLeft">
                                <ImageOutlinedIcon fontSize="small" />
                                <GifBoxOutlinedIcon fontSize="small" />
                                <PollOutlinedIcon fontSize="small" />
                                <SentimentSatisfiedAltOutlinedIcon fontSize="small" />
                                <CalendarTodayOutlinedIcon fontSize="small" />
                                <LocationOnOutlinedIcon fontSize="small" />
                            </div>
                            <button disabled={!text} className="tweet_button">Post</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Tweet