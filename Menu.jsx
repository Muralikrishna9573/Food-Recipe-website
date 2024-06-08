import React from 'react';
import './Menu.css'; // Import the CSS file for styling

const Menu = () => {
  const pizzas = [
    { name: 'Margherita', price: '$12.99', description: 'A classic pizza with tomato sauce, fresh mozzarella, and basil.' },
    { name: 'Pepperoni', price: '$14.99', description: 'Topped with tomato sauce, mozzarella, and pepperoni slices.' },
    { name: 'BBQ Chicken', price: '$16.99', description: 'Featuring BBQ sauce, grilled chicken, red onions, and cilantro.' },
    { name: 'Hawaiian', price: '$15.99', description: 'A combination of tomato sauce, mozzarella, ham, and pineapple.' },
    { name: 'Veggie Supreme', price: '$13.99', description: 'Loaded with tomato sauce, mozzarella, bell peppers, onions, mushrooms, and olives.' },
    { name: 'Meat Lover\'s', price: '$17.99', description: 'Packed with tomato sauce, mozzarella, pepperoni, sausage, ham, and bacon.' },
    { name: 'Four Cheese', price: '$14.99', description: 'A blend of mozzarella, cheddar, parmesan, and gorgonzola cheese.' },
    { name: 'Buffalo Chicken', price: '$16.99', description: 'Spicy buffalo sauce, grilled chicken, red onions, and a drizzle of ranch or blue cheese dressing.' },
    { name: 'Spinach and Feta', price: '$13.99', description: 'Topped with garlic-infused olive oil, mozzarella, spinach, and crumbled feta cheese.' },
    { name: 'Mushroom and Truffle', price: '$18.99', description: 'Featuring tomato sauce, mozzarella, sautéed mushrooms, and truffle oil.' },
  ];

  return (
    <div className='menu'>
      <h1 className='menu-title'>Pizza Menu</h1>
      
      <div className='menu-section'>
        <h2>Pizzas</h2>
        <ul>
          {pizzas.map((item, index) => (
            <li key={index} className='menu-item'>
              <div>
                <span className='menu-item-name'>{item.name}</span>
                <span className='menu-item-description'>{item.description}</span>
              </div>
              <span className='menu-item-price'>{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
