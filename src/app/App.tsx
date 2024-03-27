import { HomePage } from "../homepage/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="my-4">
      <Routes>
        {/* homepage path */}
        <Route path="/" element={<HomePage />}></Route>

        {/* menu path */}
        <Route path="/menu" element={<h1>Menu</h1>}></Route>

        {/* default path */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
