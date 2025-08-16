import { useEffect, useState } from 'react';
import './css/SearchByCategory.css';
import { Link } from 'react-router-dom';

const categoriesUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

const SearchByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  // ✅ Fetch all categories
  const fetchCategories = async () => {
    try {
      const response = await fetch(categoriesUrl);
      const { drinks } = await response.json();
      console.log("categories:", drinks);
      setCategories(drinks);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // ✅ Fetch cocktails by category
  const fetchProducts = async (category) => {
    console.log("Selected category:", category);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const { drinks } = await response.json();
      console.log("drinks:", drinks);
      setProducts(drinks || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="container">
      {/* Category Buttons */}
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category.strCategory}
            className="category-btn"
            onClick={() => fetchProducts(category.strCategory)}
          >
            {category.strCategory}
          </button>
        ))}
      </div>

      {/* Show Products */}
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
    </div>
  );
};

export default SearchByCategory;
