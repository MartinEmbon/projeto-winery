import "./app.css"

import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./pages/home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product"
import NewProduct from "./pages/newProduct/NewProduct";
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
            <Route path="/user/:userId" element={<User/>}/>
            <Route path="/newUser" element={<NewUser/>}/>
            <Route path="/products" element={<ProductList/>}/>
            <Route path="/product/:productId" element={<Product/>}/>
            <Route path="/newproduct" element={<NewProduct/>}/>
          </Routes>
        </div>               
        </BrowserRouter>         
    </div>
  );
}

export default App;
