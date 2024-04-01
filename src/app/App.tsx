import { HomePage } from "../pages/homepage/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import MenuPage from "../pages/menu/MenuPage";
import { Menu } from "../pages/menu/menuList/Menu";

function App() {
  return (
    <div className="my-4">
      <Routes>
        {/* homepage path */}
        <Route path="/" element={<HomePage />} />

        {/* menu path */}
        <Route path="/menu/" element={<MenuPage />}>
          <Route path=":entityType" element={<Menu />} />
        </Route>

        {/* default path */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
