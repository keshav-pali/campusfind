import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LostItems from "../pages/LostItems";
import FoundItems from "../pages/FoundItems";
import PostItem from "../pages/PostItem";
import Profile from "../pages/Profile";
import ItemDetails from "../pages/ItemDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/lost-items" element={<LostItems />} />
      <Route path="/found-items" element={<FoundItems />} />
      <Route path="/post-item" element={<PostItem />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/item/:id" element={<ItemDetails />} />
    </Routes>
  );
}

export default AppRoutes;