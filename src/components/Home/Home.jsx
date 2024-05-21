import Banner from "./Banner";
import ProductList from "../Product/ProductList";
import Accordion from "./Accordion";
import faqs from "../data/AccordionData";

function Home() {
  return (
    <main>
      <Banner />
      <ProductList />
      <Accordion data={faqs} />
    </main>
  );
}

export default Home;
