import React from "react";
import './App.css';
import Hader from "./Hader";
import Feed from "./Feed";
function App() {
  return (
    <div className="app">
    
     <Hader/>
    
    <div className="app_body">
<Feed/>
</div>
    </div>
  );
}

export default App;
