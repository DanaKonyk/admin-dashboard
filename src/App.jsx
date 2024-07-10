import { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { useAuth } from "./hooks/useAuth";
import Loader from "./components/Loader";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage/DashboardPage"));
const OrdersPage = lazy(() => import("./pages/OrdersPage/OrdersPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage/ProductsPage"));
const SuppliersPage = lazy(() => import("./pages/SuppliersPage/SuppliersPage"));
const CustomersPage = lazy(() => import("./pages/CustomersPage/CustomersPage"));

function App() {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="/login" />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/dashboard"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute
                redirectTo="/dashboard"
                component={<DashboardPage />}
              />
            }
          />
          <Route
            path="/orders"
            element={
              <PrivateRoute redirectTo="/orders" component={<OrdersPage />} />
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute
                redirectTo="/products"
                component={<ProductsPage />}
              />
            }
          />
          <Route
            path="/suppliers"
            element={
              <PrivateRoute
                redirectTo="/suppliers"
                component={<SuppliersPage />}
              />
            }
          />
          <Route
            path="/customers"
            element={
              <PrivateRoute
                redirectTo="/customers"
                component={<CustomersPage />}
              />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
