import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteState";

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
      <NoteState>
        <Outlet />
        <RouterProvider router={router} />
      </NoteState>
    </>
  );
}

export default App;
