import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import InventoryStats from '../components/InventoryStats';
import ProductList from '../components/ProductList';
import '../styles/Views.scss'; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchInventory } from '../redux/InventorySlice'
import { InventoryContext } from '../redux/Context';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.inventory.items);
  const status = useSelector((state) => state.inventory.status);
  const [view, setView] = useState('user'); // 'user' or 'admin'
  const [value, setValue] = useState(0); // Initialize value state

  const handleViewChange = (newView) => {
    setView(newView);
  };

  useEffect(() => {
    dispatch(fetchInventory());
  }, [dispatch]);

  // Update value state whenever products state changes
  useEffect(() => {
    const totalValue = products.reduce((total, item) => total + item.price.slice(1) * item.quantity, 0);
    setValue(totalValue);
  }, [products]);

  // Calculate out of stocks
  const outOfStocks = products.filter(item => item.quantity === 0).length;

  // Calculate number of distinct quantities
  const distinctQuantities = [...new Set(products.map(item => item.quantity))].length;

  //Calculate total products
  const totalProduct = products.length;

  return (
    <InventoryContext.Provider value={{ view, products, status, value }}>
      <div className="admin-container">
        <Navbar onViewChange={handleViewChange} />
        <InventoryStats
          totalProduct={totalProduct}
          totalStoreValue={value} // Use the calculated value state here
          outOfStocks={outOfStocks}
          distinctQuantities={distinctQuantities}
        />
        <ProductList />
      </div>
    </InventoryContext.Provider>
  );
}

App.propTypes = {};

App.defaultProps = {};

export default App;
