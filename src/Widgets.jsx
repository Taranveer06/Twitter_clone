import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "./Widgets.css";
const trends = [
  {
    category: "Sports",
    title: "IPL 2026",
    tweets: "120K Tweets",
  },
  {
    category: "Technology",
    title: "React JS",
    tweets: "80K Tweets",
  },
  {
    category: "News",
    title: "India Elections",
    tweets: "200K Tweets",
  },
];
function Widgets(){

    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon"/>
                <input type="text" placeholder="Search Twitter"/>
            </div>
            <div className="widgets_container">
                <h2>What's happening</h2>
                {trends.map((trend,key)=>(
                    <div className="trend" key={key}>
                        <p className="trend_category">
                            {trend.category} · Trending
                        </p>
                        <h4 className="trend_title">
                            {trend.title}
                        </h4>
                        <p className="trend_tweets">
                            {trend.tweets}
                        </p>
                    </div>
                ))}
                <p className="widgets_showMore">Show more</p>
            </div>
            
        </div>
    )
}

export default Widgets;