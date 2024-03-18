import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import EditProductModal from './EditProductModal';  // Update with the correct path

describe('EditProductModal', () => {
  it('renders correctly and responds to button clicks', () => {
    const onSave = jest.fn();
    const onClose = jest.fn();
    const product = {
      category: 'Electronics',
      price: 100,
      quantity: 10,
      total: 1000,
    };

    render(<EditProductModal product={product} onSave={onSave} onClose={onClose} />);

    const saveButton = screen.getByText('Save');
    const cancelButton = screen.getByText('Cancel');

    fireEvent.click(saveButton);
    expect(onSave).toHaveBeenCalled();

    fireEvent.click(cancelButton);
    expect(onClose).toHaveBeenCalled();
  });
});
