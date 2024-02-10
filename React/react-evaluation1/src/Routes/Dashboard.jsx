// function Dashboard() {
//   return (
//     <div>
//       <h3>Dashboard</h3>
//       <div>
//         <button data-testid="logout-btn">Logout</button>
//         <p>
//           Token:
//           <b data-testid="user-token"></b>
//         </p>
//       </div>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         {/* restaurant table */}
//       </div>
//       <div data-testid="pagination-container"></div>
//     </div>
//   );
// }

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { useAuth } from '../Context/AuthContext';
import Pagination from '../Components/Pagination';
import RestaurantTable from '../Components/RestaurantTable';

const Dashboard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { authState, logoutUser } = useAuth();
  
  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${currentPage}&limit=10`);
      const data = await response.json();
      console.log(data.data)
      setRestaurants(data.data);
      setTotalPages(data.totalPages);
    };
    fetchRestaurants();
  }, [currentPage]);

  return (
    <div>
      <button data-testid="logout-btn" onClick={logoutUser}>Logout</button>
      <span data-testid="user-token">{authState.token}</span>
      <RestaurantTable data={restaurants} />
      <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={setCurrentPage} />
    </div>
  );
};
