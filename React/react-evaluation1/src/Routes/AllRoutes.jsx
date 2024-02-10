// function AllRoutes() {
//   return (
//     <div>

//     </div>
//   );
// }

// export default AllRoutes;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import PrivateRoute from '../Components/PrivateRoute';
import SingleRestaurantPage from './SingleRestaurantPage';
import { AuthProvider } from '../Context/AuthContext';

const AllRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/restaurants/:id" element={<PrivateRoute><SingleRestaurantPage /></PrivateRoute>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AllRoutes;
