

import React, {useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInventory } from '../redux/InventorySlice';
import PropTypes from 'prop-types';
import Product from './Product';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import '../styles/Views.scss'; 


function ProductList({ view }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.inventory.items);

  useEffect(() => {
    dispatch(fetchInventory());
  }, [dispatch]);

  return (
    <Table className="product-table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Value</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <Product key={product.name} data={product} view={view} />
        ))}
      </TableBody>
    </Table>
  );
}

ProductList.propTypes = {
  view: PropTypes.string.isRequired,
};

ProductList.defaultProps = {};

export default ProductList;
