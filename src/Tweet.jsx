import React from 'react'
import "./Tweet.css"
<<<<<<< HEAD
function Tweet(){
    return (
        <div className="Tweet">
            <form>
                <div className="tweet_input">

                </div>
                <button>Tweet</button>
=======
import Avatar from '@mui/material/Avatar'
function Tweet(){
    return (
        <div className="tweet">
            <form>
                <div className="tweet_input">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <input type="text" placeholder="What's happening" />
                <input className="tweet_imageinput" type="text" placeholder="Enter image URL" />
                </div>
                <button className="tweet_button">Tweet</button>
>>>>>>> bf9c7c2 (Post section added)
            </form>
        </div>
    )
}

export default Tweet