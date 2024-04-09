import { Navigate, Route, Routes } from "react-router-dom";

import { MenuItem } from "../types";

import { HomePage } from "../pages/homepage/HomePage";
import MenuPage from "../pages/menu/MenuPage";
import { Menu } from "../pages/menu/menuList/Menu";
import { GetApp } from "../pages/getAppPage/GetApp";

import { PageHeader } from "../components/pageHeader/PageHeader";
import { Contacts } from "../components/contacts/Contacts";

function App() {
  return (
    <div className="my-4">
      <PageHeader />
      <Routes>
        {/* homepage path */}
        <Route path="/" element={<HomePage />} />

        {/* menu path */}
        <Route path="/menu" element={<MenuPage />}>
          <Route path=":menuItem" element={<Menu />} />
          <Route index element={<Navigate to={`/menu/${MenuItem.TOP_CHOICES}`} />} />
        </Route>

        {/* homepage path */}
        <Route path="/app" element={<GetApp />} />

        {/* default path */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Contacts />
    </div>
  );
}

export default App;
