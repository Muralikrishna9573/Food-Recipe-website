import React from 'react';
import './product.css'; 

const Product = ({ recipe }) => {
  const submithandler=()=>{
    alert("add to cart successfully")

  }
  return (
    <div className="product">
      <h3>{recipe.label}</h3>
      <img src={recipe.image} alt={recipe.label} />
      <p>Calories: {Math.round(recipe.calories)}</p>
      <a href={recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
      <button onClick={submithandler} className='butn'>Buy</button>
    </div>
  );
};

export default Product;
