import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Route from "./Route.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Service from "./pages/Service.tsx";
import NewProp from "./pages/NewProp.tsx";
import Contact from "./pages/Contact.tsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init({
  duration: 1500,
  once: true,
});

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Route />,
      children: [
        {
          index: true,
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "service",
          element: <Service />,
        },
        {
          path: "property",
          element: <NewProp />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ],
  {
    basename: "/Task4_Adv_Flora",
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
