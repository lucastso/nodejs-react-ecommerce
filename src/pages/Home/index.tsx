import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Product from "../../components/Product";
import api from "../../api";

interface ProductInterface {
  title: String;
}

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get("/products");
      if (response.status != 200) {
        console.log("erro");
      } else {
        setProducts(response.data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Nav />
      <section className="container mt-10 grid grid-cols-5 mx-auto gap-6">
        {products.map((el: ProductInterface) => (
          <Product />
        ))}
      </section>
    </>
  );
};

export default Home;
