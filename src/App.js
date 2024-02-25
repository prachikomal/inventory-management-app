// App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import InventoryStats from './components/InventoryStats';
import ProductList from './components/ProductList';
import './components/Views.scss'; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchInventory } from './InventorySlice';


function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.inventory.items);
  const [view, setView] = useState('user'); // 'user' or 'admin'

  const handleViewChange = (newView) => {
    setView(newView);
  };


  useEffect(() => {
    dispatch(fetchInventory());
  }, [dispatch]);

  // Calculate total store value
  const totalStoreValue = products.reduce((total, item) => total + Number(item.value.slice(1)), 0);

  // Calculate out of stocks
  const outOfStocks = products.filter(item => item.quantity === 0).length;

  // Calculate number of distinct quantities
  const distinctQuantities = [...new Set(products.map(item => item.quantity))].length;

  //Calculate total products
  const totalProduct = products.length;

  return (
    <div className="admin-container">
      <Navbar onViewChange={handleViewChange} />
      <InventoryStats
        totalProduct={totalProduct}
        totalStoreValue={totalStoreValue}
        outOfStocks={outOfStocks}
        distinctQuantities={distinctQuantities}
      />
      <ProductList view={view} />
    </div>
  );
}

App.propTypes = {};

App.defaultProps = {};

export default App;


