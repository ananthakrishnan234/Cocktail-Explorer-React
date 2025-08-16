import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/ProductDetail.css";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // ✅ Correct API endpoint to fetch by ID
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const { drinks } = await response.json();

        if (drinks && drinks.length > 0) {
          setProduct(drinks[0]);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
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

export default ProductDetail;
