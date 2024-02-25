import React, { useContext } from 'react';
import Product from "./Product";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import "../styles/Views.scss";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { InventoryContext } from '../redux/Context';

function ProductList() {
  const { products, status } = useContext(InventoryContext);

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
        {status === "loading" ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "50vw",
            }}
          >
            <p>Loading... </p>

            <CircularProgress />
          </Box>
        ) : (
          products.map((product) => (
            <Product key={product.name} data={product} />
          ))
        )}
      </TableBody>
    </Table>
  );
}

ProductList.propTypes = {};

ProductList.defaultProps = {};

export default ProductList;
