import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>home</div>,
    errorElement: <div>Not found</div>,
  },
  {
    path: "/videos",
    element: <div>videos</div>,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
