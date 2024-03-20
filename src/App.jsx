import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppWrapperComponent from "./components/AppWrapper/AppWrapperComponent";
//import Page from "./components/Page/Page";
import Product from "./components/Product/Product";
import SingleProduct from "./components/Product/SingleProduct";
import Home from "./components/Home/Home";
//import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/Product/ProductList";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Blog from "./components/Blog/Blog";
import BlogList from "./components/Blog/BlogList";
import SingleBlog from "./components/Blog/SingleBlog";
import Categories from "./components/Categories/Categories";
import CategoriesList from "./components/Categories/CategoriesList";
import SingleCategory from "./components/Categories/SingleCategory";
import NotFound from "./components/NotFound/NotFound";
import Checkout from "./components/Checkout/Checkout";
import Terms from "./components/Informaition/Terms";
import Cookies from "./components/Informaition/Cookies";
import Faq from "./components/Informaition/Faq";
import Privacy from "./components/Informaition/Privacy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppWrapperComponent />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/blog" element={<Blog />}>
              <Route index element={<BlogList />} />
              <Route path="/blog/:id" element={<SingleBlog />} />
            </Route>
            <Route path="/categories" element={<Categories />}>
              <Route index element={<CategoriesList />} />
              <Route path="/categories/:id" element={<SingleCategory />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/cookies" element={<Cookies />} />

            <Route path="/product" element={<Product />}>
              <Route index element={<ProductList />} />
              <Route path="/product/:id" element={<SingleProduct />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
