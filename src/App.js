import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const List = lazy(() => import("./Pages/List"));
const Add = lazy(() => import("./Pages/Add"));
const Edit = lazy(() => import("./Pages/Edit"));

function App() {
  return (
    <Suspense fallback={<div>load...</div>}>
      <Routes>
        <Route element={<List />} path="/" />
        <Route element={<Add />} path="/add" />
        <Route element={<Edit />} path="/edit/:id" />
      </Routes>
    </Suspense>
  );
}

export default App;
