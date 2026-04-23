import React,{useState,useEffect } from 'react'
import Tweet from './Tweet.jsx'
import Post from './Post.jsx'
import "./Feed.css"
const defaultPosts = [
  {
    id: 1,
    displayName: "Elon Musk",
    text: "Going to Mars 🚀",
    image: "https://picsum.photos/300"
  },
  {
    id: 2,
    displayName: "React Dev",
    text: "Learning React is fun 😎",
    image: "https://picsum.photos/301"
  }
]
function Feed(){
    const[posts,setPosts]=useState([])
    useEffect(() => {
        setPosts(defaultPosts)
        }, [])
const removePost = (id) => {
  setPosts(posts.filter((p) => p.id !== id))
}
    const addPost =(text,image)=>{
        const newPost={
            id:Date.now(),
            displayName:"You",
            text : text,
            image:image,
        }
        setPosts([newPost,...posts])
    }
    return (
        <div className="feed">
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            <Tweet addPost={addPost}/>
            {posts.map((p)=>(
                <Post key={p.id} id={p.id} displayName={p.displayName} text={p.text} image={p.image} removePost={removePost} />
            ))}
            
        </div>
    )
}

export default Feed