import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import InventoryStats from '../components/InventoryStats';
import ProductList from '../components/ProductList';
import '../styles/Views.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInventory } from '../redux/InventorySlice';

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

  // Import utility functions from helpers.js
  const { calculateTotalStoreValue, calculateOutOfStocks, calculateDistinctQuantities, calculateTotalProducts } = require('../utils/helpers');

  // Calculate total store value
  const totalStoreValue = calculateTotalStoreValue(products);

  // Calculate out of stocks
  const outOfStocks = calculateOutOfStocks(products);

  // Calculate number of distinct quantities
  const distinctQuantities = calculateDistinctQuantities(products);

  // Calculate total products
  const totalProduct = calculateTotalProducts(products);

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

export default App;
