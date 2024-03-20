import Banner from "./Banner";
import PopularProducts from "./PopularProducts";
import ProductList from "../Product/ProductList";

function Home() {
  return (
    <main>
      <Banner />
      <PopularProducts />
      <ProductList />
    </main>
  );
}

export default Home;
