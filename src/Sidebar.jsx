import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';  
const Sidebar = () => {
  return (
    <div className='sidebar '>
        <TwitterIcon className='siderbar_twitterIcon'/>
        <SidebarOption   active Icon={HomeIcon} text="Home"/>
        <SidebarOption  Icon={SearchIcon} text="Explore"/>
        <SidebarOption  Icon={NotificationsIcon} text="Notifications"/>
        <SidebarOption Icon={MailIcon} text="Messages" />
        <SidebarOption Icon={BookmarkIcon} text="Bookmarks" />
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />
        <button className='sidebar_tweet'>Tweet </button>
        
    </div>
  )
}

export default Sidebar