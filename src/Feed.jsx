import React from 'react'
import Tweet from './Tweet.jsx'
import Post from './Post.jsx'
import "./Feed.css"
function Feed(){
    return (
        <div className="feed">
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            <Tweet/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Feed