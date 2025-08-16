import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Drinks.css";


const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const Drinks = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data.drinks)) {
          setProducts(data.drinks); // ✅ set drinks if array
        } else {
          setProducts([]); // ✅ fallback if null
        }
      } catch (error) {
        console.error("Error fetching drinks:", error);
        setProducts([]); // ✅ fallback on error
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h2> Drinks List</h2>

      {loading ? (
        <p>Loading drinks...</p>
      ) : (
        <div className="cocktails-container">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="cocktail-card" key={product.idDrink}>
                <img
                  src={product.strDrinkThumb}
                  alt={product.strDrink}
                  className="cocktail-img"
                />
                <div className="cocktail-info">
                  <div className="content-text">
                    <h2 className="cocktail-name">{product.strDrink}</h2>
                    <span className="cocktail-info">{product.strCategory}</span>
                  </div>
                  <Link to={`/drinks/${product.idDrink}`}>
                    <div className="btn">View Details</div>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No drinks found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Drinks;
