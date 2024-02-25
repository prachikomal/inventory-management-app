
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

function EditProductModal({ product, onSave, onClose }) {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (event) => {
    setEditedProduct({
      ...editedProduct,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = () => {
    onSave(editedProduct);
  };

  return (
    <Dialog open onClose={onClose} className="dialog">
      <DialogTitle className="dialog-title">Edit Product</DialogTitle>
      
      <DialogContent className="dialog-content">
      <p>{product.name}</p>
        <TextField
          margin="dense"
          label="Category"
          type="text"
          fullWidth
          variant="standard"
          name="category"
          value={editedProduct.category}
          onChange={handleChange}
          className="text-field"
        />
        <TextField
          margin="dense"
          label="Price"
          type="string"
          fullWidth
          variant="standard"
          name="price"
          value={editedProduct.price}
          onChange={handleChange}
          className="text-field"
        />
        <TextField
          margin="dense"
          label="Quantity"
          type="number"
          fullWidth
          variant="standard"
          name="quantity"
          value={editedProduct.quantity}
          onChange={handleChange}
          className="text-field"
        />
        <TextField
          margin="dense"
          label="Value"
          type="string"
          fullWidth
          variant="standard"
          name="value"
          value={editedProduct.value}
          onChange={handleChange}
          className="text-field"
        />
      </DialogContent>
      <DialogActions className="dialog-actions">
        <Button onClick={onClose} className="button">Cancel</Button>
        <Button onClick={handleSave} className="button">Save</Button>
      </DialogActions>
    </Dialog>
  );
}

EditProductModal.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditProductModal;
