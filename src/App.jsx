import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import SignInPage from "./pages/SignInPage";
import FoodDetailsPage from "./pages/FoodDetailsPage";
import ViewCartPage from "./pages/ViewCartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import ProfilePage from "./pages/ProfilePage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AddFoodItemPage from "./pages/AddFoodItemPage";
import RestaurantDashboardLayout from "./components/RestaurantDashboardLayout";
import RestaurantDashboardHome from "./pages/RestaurantDashboardHome";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import FoodItemsPage from "./pages/FoodItemsPage";
import UpdateRestaurantFood from "./pages/UpdateRestaurantFood";
import UpdateRestaurantInfo from "./pages/UpdateRestaurantInfo";
import AdminDashboardLayout from "./components/AdminDashboardLayout";
import AdminDashboardHome from "./pages/AdminDashboardHome";
import UsersPage from "./pages/UsersPage";
import UpdateUserRolePage from "./pages/UpdateUserRolePage";
import CreateRestaurantPage from "./pages/CreateRestaurantPage";
import RestaurantListPage from "./pages/RestaurantListPage";
import AddCategoryPage from "./pages/AddCategoryPage";
import CategoryListPage from "./pages/CategoryListPage";
import AddFoodTagPage from "./pages/AddFoodTagPage";
import FoodTagListPage from "./pages/FoodTagListPage";
import FoodItem from "./components/FoodItem";
import CategoryFoodPage from "./pages/CategoryFoodPage";
import AllRestaurants from "./pages/AllRestaurants";
import RestaurantFoodPage from "./pages/RestaurantFoodPage";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import UserOrderListPage from "./pages/UserOrderListPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="food/:slug/" element={<FoodDetailsPage />} />
          <Route path="sign-up/" element={<SignUpPage />} />
          <Route path="sign-in/" element={<SignInPage />} />
          <Route path="unauthorized/" element={<UnauthorizedPage />} />
          <Route path="/:tag/" element={<FoodItem />} />
          <Route path="category/:slug/" element={<CategoryFoodPage />} />
          <Route path="restaurant-list/" element={<AllRestaurants />} />
          <Route path="restaurant/:slug/" element={<RestaurantFoodPage />} />
          <Route path="about/" element={<AboutUsPage />} />
          <Route path="contact/" element={<ContactUsPage />} />
          <Route
            path="profile/"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="update-profile/"
            element={
              <ProtectedRoute>
                <UpdateProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="view-cart/"
            element={
              <ProtectedRoute>
                <ViewCartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="checkout/"
            element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="order-history/"
            element={
              <ProtectedRoute>
                <OrderHistoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="restaurant/dashboard/"
            element={
              <ProtectedRoute requiredRole={"restaurant_owner"}>
                <RestaurantDashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="" element={<RestaurantDashboardHome />} />
            <Route path="add-food-item/" element={<AddFoodItemPage />} />
            <Route
              path="update-food-item/:id/"
              element={<UpdateRestaurantFood />}
            />
            <Route
              path="update-restaurant-info/"
              element={<UpdateRestaurantInfo />}
            />
            <Route path="food-items/" element={<FoodItemsPage />} />
            <Route path="user-order/" element={<UserOrderListPage />} />
          </Route>

          <Route
            path="admin/dashboard/"
            element={
              <ProtectedRoute requiredRole={"admin"}>
                <AdminDashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="" element={<AdminDashboardHome />} />
            <Route path="users/" element={<UsersPage />} />
            <Route
              path="users/update-role/:id/"
              element={<UpdateUserRolePage />}
            />
            <Route
              path="create-restaurant/"
              element={<CreateRestaurantPage />}
            />
            <Route path="restaurant-list/" element={<RestaurantListPage />} />
            <Route path="food-category/" element={<AddCategoryPage />} />
            <Route path="category-list/" element={<CategoryListPage />} />
            <Route path="food-tag/" element={<AddFoodTagPage />} />
            <Route path="tag-list/" element={<FoodTagListPage />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
