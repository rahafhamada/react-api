import React from 'react'
import { TapSwitcherStyle } from './tapswitcher-style'

const TapSwitcher = ({activeTab,setActiveTab}) => {
    return (
        <TapSwitcherStyle>
           
               <li onClick={() => setActiveTab("users-tab")}
                style={{display:"inline" , margin:25 , color: activeTab==="users-tab" && "red" }}>users</li>
               <li onClick={() => setActiveTab("posts-tab")}  style={{display:"inline", margin:25 ,color: activeTab==="users-tab" && "red"}}>posts</li>
               <li onClick={() => setActiveTab("todos-tab")} style={{display:"inline", margin:25 ,color: activeTab==="users-tab" && "red"}}>todos</li>
              
        </TapSwitcherStyle>
    )
}

export default TapSwitcher
