import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      //자식들의 경로
      { index: true, element: <Home /> }, //최상위 경로(/) index는 home이다.
      {
        path: "/vidoes",
        element: <Videos />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
