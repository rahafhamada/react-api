
import UsersPage  from "./comoponents/users";
import PostsPage from './comoponents/posts';


import React, { useState } from 'react'
import TapSwitcher from "./comoponents/tapswitcher";

const App = () => {
  const [activeTab,setActiveTab]= useState("activetab")
 
  return (
    <div>
    <TapSwitcher  activeTab={activeTab} setActiveTab={setActiveTab}
    />
    {activeTab==="users-tab"&& <h1>"user page"</h1>}
    {activeTab==="posts-tab"&& <h1>"post page"</h1>}
    {activeTab==="todos-tab"&& <h1>"todos page"</h1>}

    </div>
  )
}


export default App;
