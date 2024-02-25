import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Switch from '@mui/material/Switch';
import '../styles/Views.scss'; 
import { InventoryContext } from '../redux/Context';

function Navbar({ onViewChange }) {
  const { view } = useContext(InventoryContext);

  const handleSwitchChange = (event) => {
    onViewChange(event.target.checked ? 'admin' : 'user');
  };

  return (
    <div>
      <label>Switch to Admin View</label>
      <Switch checked={view === 'admin'} onChange={handleSwitchChange} />
    </div>
  );
}

Navbar.propTypes = {
  onViewChange: PropTypes.func.isRequired,
};

Navbar.defaultProps = {};

export default Navbar;
