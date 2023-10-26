import { Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";

const App = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="app text-m font-main background-bg color-primary min-h-screen">
      <button onClick={toggleTheme}>Toggle</button>

      <Link to={"/"}>ГЛАВНАЯ</Link>
      <Link to={"/about"}>О нас</Link>

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AboutPageAsync />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MainPageAsync />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export { App };
