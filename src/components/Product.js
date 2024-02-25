
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ActionButtons from './ActionButtons';
import { TableRow, TableCell } from '@mui/material';
import '../styles/Views.scss'; 
import { useDispatch } from 'react-redux';
import { deleteProduct, updateProduct, toggleProduct } from '../redux/InventorySlice';
import EditProductModal from './EditProductModal'; 

function Product({ data, view }) {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [check,setCheck]=useState(false);

  const handleDelete = () => {
    dispatch(deleteProduct(data.name));
  };

  const handleToggle = () => {
    dispatch(toggleProduct(data.name));
    setCheck(!check)
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleSave = (updatedProduct) => {
    dispatch(updateProduct(updatedProduct));
    setIsEditModalOpen(false);
  };

  

  return (
    <TableRow>
      <TableCell className={check? "inactive":""}>{data.name}</TableCell>
      <TableCell className={check? "inactive":""}>{data.price}</TableCell>
      <TableCell className={check? "inactive":""}>{data.quantity}</TableCell>
      <TableCell className={check? "inactive":""}>{data.value}</TableCell>
      <TableCell className="actions">
        <ActionButtons view={view} onDelete={handleDelete} onToggle={handleToggle} onEdit={handleEdit} check={check} />
        {isEditModalOpen && <EditProductModal product={data} onSave={handleSave} onClose={() => setIsEditModalOpen(false)} />}
      </TableCell>
    </TableRow>
  );
}

Product.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  view: PropTypes.string.isRequired,
};

Product.defaultProps = {};

export default Product;
