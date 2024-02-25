
import React from "react";
import PropTypes from "prop-types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyExchangeRoundedIcon from "@mui/icons-material/CurrencyExchangeRounded";
import RemoveShoppingCartRoundedIcon from "@mui/icons-material/RemoveShoppingCartRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";

function InventoryStats({
  totalProduct,
  totalStoreValue,
  outOfStocks,
  distinctQuantities
}) {
  return (
    <>
      <h1>Inventory Stats</h1>
      <div className="inventory-stats">
        <div className="stat-card">
          <ShoppingCartIcon />
          <div className="text-container">
            <p className="title">Total Product</p>
            <p className="value">{totalProduct}</p>
          </div>
        </div>
        <div className="stat-card">
          <CurrencyExchangeRoundedIcon />{" "}
          <div className="text-container">
            <p className="title">Total Store Value</p>
            <p className="value">${totalStoreValue}</p>
          </div>
        </div>
        <div className="stat-card">
          <RemoveShoppingCartRoundedIcon />
          <div className="text-container">
            <p className="title">Out of Stocks</p>
            <p className="value">{outOfStocks}</p>
          </div>
        </div>
        <div className="stat-card">
          <CategoryRoundedIcon />
          <div className="text-container">
            <p className="title">Number of Distinct Quantities</p>
            <p className="value">{distinctQuantities}</p>
          </div>
        </div>
      </div>
    </>
  );
}

InventoryStats.propTypes = {
  totalProduct: PropTypes.number.isRequired,
  totalStoreValue: PropTypes.number.isRequired,
  outOfStocks: PropTypes.number.isRequired,
  distinctQuantities: PropTypes.number.isRequired,
};

export default InventoryStats;
