// function RestaurantTable({data}){
//     return (
//             <table border="1px">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Rating</th>
//                         <th>Type</th>
//                         <th>Number of Votes</th>
//                         <th>Price Starts From</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {/* map through the data */}
//                     {[].map((item) => {

//                     })}
//                 </tbody>
//             </table>
//     )
// }

// export default RestaurantTable



import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Type</th>
          <th>Votes</th>
          <th>Price Starts From</th>
        </tr>
      </thead>
      <tbody>
        {data.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </tbody>
    </table>
  );
};

export default RestaurantTable;
