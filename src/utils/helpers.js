export const calculateTotalStoreValue = (products) => {
    return products.reduce((total, item) => total + Number(item.value.slice(1)), 0);
  };
  
  export const calculateOutOfStocks = (products) => {
    return products.filter((item) => item.quantity === 0).length;
  };
  
  export const calculateDistinctQuantities = (products) => {
    return [...new Set(products.map((item) => item.quantity))].length;
  };
  
  export const calculateTotalProducts = (products) => {
    return products.length;
  };
  