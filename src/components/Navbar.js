
import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@mui/material/Switch';
import '../styles/Views.scss'; 


function Navbar({ onViewChange }) {
  const handleSwitchChange = (event) => {
    onViewChange(event.target.checked ? 'admin' : 'user');
  };

  return (
    <div>
      <label>Switch to Admin View</label>
      <Switch onChange={handleSwitchChange} />
      
    </div>
  );
}

Navbar.propTypes = {
  onViewChange: PropTypes.func.isRequired,
};

Navbar.defaultProps = {};

export default Navbar;
