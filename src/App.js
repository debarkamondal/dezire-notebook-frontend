import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: (
          <>
            <Home />
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <Navbar />
            <About />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
