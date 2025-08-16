import { useEffect, useState } from 'react';
import './css/RandomDrink.css'

const RandomDrink = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
      const { drinks } = await response.json();
      console.log(drinks);
      if (drinks && drinks.length > 0) {
        setProduct(drinks[0]); // store the first drink
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return <div className="container"><h2>Loading...</h2></div>;
  }

  if (!product) {
    return <div className="container"><h2>No drink found.</h2></div>;
  }

  return (
    <div className="container">
        <button className='btn' onClick={fetchProduct}>Get Random Drink</button>
      <div className="drink">
        <div className="flex-container">
          <img
            src={product.strDrinkThumb}
            alt={product.strDrink}
            className="cocktail-img"
          />
          <div className="cocktail-infos">
            <div className="row">
              <h3 className="label">Name:</h3>
              <p className="text">{product.strDrink}</p>
            </div>
            <div className="row">
              <h3 className="label">Category:</h3>
              <p className="text">{product.strCategory}</p>
            </div>
            <div className="row">
              <h3 className="label">Info:</h3>
              <p className="text">{product.strAlcoholic}</p>
            </div>
            <div className="row">
              <h3 className="label">Instructions:</h3>
              <p className="text">{product.strInstructions}</p>
            </div>
            <div className="row">
              <h3 className="label">Glass:</h3>
              <p className="text">{product.strGlass}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomDrink;
