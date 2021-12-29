import "./app.css"

import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./pages/home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserList from "./pages/userList/UserList";

const App= () => {
  return (
    <div>
      <BrowserRouter>
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="users" element={<UserList/>}/>
          </Routes>
        </div>               
        </BrowserRouter>         
    </div>
  );
}

export default App;
