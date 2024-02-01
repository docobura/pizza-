import React from 'react';
import { menuLists } from '../helpers/menuList';
import MenuItem from '../components/menuItem'; // Assuming the correct component name
import { Key } from '@mui/icons-material';
import '../styles/menu.css';

function Menu() {
  return (
    <div className="menu"> 
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuLists">
        {menuLists.map((menuItem, key) => (
          <MenuItem 
            key={key} 
            image={menuItem.image} 
            name={menuItem.name} 
            price={menuItem.price} 
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
