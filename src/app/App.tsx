import { Navigate, Route, Routes } from "react-router-dom";

import { MenuItem } from "../types";

import { HomePage } from "../pages/homepage/HomePage";
import MenuPage from "../pages/menu/MenuPage";
import { Menu } from "../pages/menu/menuList/Menu";
import { GetApp } from "../pages/getAppPage/GetApp";

import { PageHeader } from "../components/pageHeader/PageHeader";
import { Contacts } from "../components/contacts/Contacts";
import { ProductPage } from "../pages/productPage/ProductPage";
import { Cart } from "../pages/cartPage/Cart";

function App() {
  return (
    <div className="my-4">
      <PageHeader />
      <Routes>
        {/* homepage path */}
        <Route path="/" element={<HomePage />} />

        {/* menu path */}
        <Route path="/menu" element={<MenuPage />}>
          <Route index element={<Navigate to={`/menu/${MenuItem.COFFEES}`} />} />
          <Route path=":menuItem" element={<Menu />} />
        </Route>
        <Route path="/menu/:menuItem/:title" element={<ProductPage />} />

        {/* mobile app path */}
        <Route path="/app" element={<GetApp />} />

        {/* cart path */}
        <Route path="/cart" element={<Cart />} />

        {/* default path */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Contacts />
    </div>
  );
}

export default App;
