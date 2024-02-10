// function SingleRestaurantPage() {
//   return (
//     <div data-testid="restaurant-container">
//       <div>
//         <h3 data-testid="restaurant-name"></h3>
//       </div>
//       <div data-testid="restaurant-type">Type:</div>
//       <div data-testid="restaurant-rating">Rating:</div>
//       <div data-testid="restaurant-votes">Votes:</div>
//       <div data-testid="restaurant-price">Starting Price:</div>
//       <div>
//         <img data-testid="restaurant-image" width={"100px"} />
//       </div>
//     </div>
//   );
// }
// export default SingleRestaurantPage;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleRestaurantPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurant = async () => {
      const response = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`);
      const data = await response.json();
      setRestaurant(data.data);
      setLoading(false);
    };
    fetchRestaurant();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>Type: {restaurant.type}</p>
      <p>Rating: {restaurant.rating}</p>
      <p>Number of Votes: {restaurant.number_of_votes}</p>
      <p>Price Starts From: {restaurant.price_starts_from}</p>
      <img src={restaurant.image} alt={restaurant.name} />
    </div>
  );
};

export default SingleRestaurantPage;
