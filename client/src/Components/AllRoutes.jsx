import React, { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import UserList from "../Pages/UserList";
import AddUser from "../Pages/AddUser";
import EditUser from "../Pages/EditUser";

//AllRoutes Component
const AllRoutes = () => {
  /*  This component defines the routing for the application using react-router-dom.
   It sets up the routes for different pages of the application. It also includes a 
   useLayoutEffect hook to scroll to the top of the page whenever the location changes. */
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/edituser/:id" element={<EditUser />} />
    </Routes>
  );
};

export default AllRoutes;
