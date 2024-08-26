import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import SignInPage from "./pages/SignInPage";
import FoodDetailsPage from "./pages/FoodDetailsPage";
import ViewCartPage from "./pages/ViewCartPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="food/:slug/" element={<FoodDetailsPage />} />
        <Route path="sign-in/" element={<SignInPage />} />
        <Route path="view-cart/" element={<ViewCartPage />}/>
        <Route path="checkout/" element={<CheckoutPage />}/>
      </Routes>
    </>
  );
}

export default App;
