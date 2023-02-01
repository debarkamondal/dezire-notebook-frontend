import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NoteState from "./context/notes/NoteState";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <NoteState>
        <RouterProvider router={router} />
      </NoteState>
    </>
  );
}

export default App;
