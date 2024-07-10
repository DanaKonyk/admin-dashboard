# Admin-Dashboard

# Project Description

This project aims to create an administrative dashboard for a medical store, providing comprehensive management tools and statistical insights. The application consists of several main pages and components, each serving a specific function within the dashboard.

## Key Pages and Components

### **Login Page**

- **Purpose:** Allows the main administrator to sign in/log in with their credentials.

### **Shared Layout**

- **Purpose:** Provides a consistent layout for the dashboard, containing the `Header` and `Sidebar` components.
- **Features:**
  - Navigation highlighting for active links.
  - Adaptivity to different screen sizes (tablet and desktop).

### **Dashboard Page**

- **Route:** `/dashboard` (private route)
- **Purpose:** Displays general statistics and recent activities.
- **Components:**
  - `Statistics`: Shows data on products, suppliers, and customers.
  - `Recent Customers`: Table listing recent customers with their details.
  - `Income/Expenses`: Table listing income and expenses with relevant details.

### **Orders Page**

- **Route:** `/orders` (private route)
- **Purpose:** Manages and displays all orders.
- **Components:**
  - `User Name Filter`: Input for filtering orders by user name.
  - `Orders Table`: Lists all orders with details.

### **Products Page**

- **Route:** `/products` (private route)
- **Purpose:** Manages and displays all products.
- **Components:**
  - `Product Name Filter`: Input for filtering products by name.
  - `Products Table`: Lists all products with details, buttons (edit, delete).
  - `Add New Product Modal`: Form for adding new products.
  - `Edit Product Data Modal`: Form for editing existing product details.

### **Suppliers Page**

- **Route:** `/suppliers` (private route)
- **Purpose:** Manages and displays all suppliers.
- **Components:**
  - `Supplier Name Filter`: Input for filtering suppliers by name.
  - `Suppliers Table`: Lists all suppliers with details.
  - `Add New Supplier Modal`: Form for adding new suppliers.
  - `Edit Supplier Data Modal`: Form for editing existing supplier details.

### **Customers Page**

- **Route:** `/customers` (private route)
- **Purpose:** Manages and displays all customers.
- **Components:**
  - `Customer Name Filter`: Input for filtering customers by name.
  - `Customers Table`: Lists all customers with details.
- **Features:**
  - Pagination for navigating through customer data.

## Key Technologies

- **Frontend:** HTML/CSS, JavaScript, React, Redux
- **Form Management:** react-hook-form, Yup for validation
- **Design:** Figma for mockups
- **UI Libraries:** antd
- **Optimization:**
  - Responsive design for tablets and desktops
  - Image optimization (retina support, sprites)
  - Valid and adaptive markup

## Design Mockup and Requirements

- **Figma Mockup:** [Admin Dashboard Design](https://www.figma.com/design/z1JklHHxX8kTGo3zWvlzat/Admin-dashboard?node-id=0-960&t=TU1iNG2Z1WicByxM-0)
- **Technical Requirements:** [Technical Documentation](https://docs.google.com/spreadsheets/d/1ufIlG2HwqppnY1by3HD4l6TVGq4EoW_o8b-ubA-pQq4/edit?gid=0#gid=0)

By following these guidelines and leveraging the provided resources, the project aims to deliver a robust and user-friendly administrative dashboard for managing a medical store's operations.
