const location = {
  "/dashboard": "Dashboard",
  "/orders": "All Orders",
  "/products": "All Products",
  "/suppliers": "All Suppliers",
  "/customers": "All Customers",
};

export const getLocation = (value) => {
  const { pathname } = value;
  return location[pathname] || null;
};
