import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/nav/nav-bar.component";
import Home from "./pages/home/home.component";
import Product from "./pages/product/product.component";
import Products from "./pages/products/products.component";
import About from "./pages/about/about.component";
import Footer from "./components/footer/footer.component";
import Contact from "./pages/contact/contact.component";
import "./App.scss";

const Layout = () => {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
