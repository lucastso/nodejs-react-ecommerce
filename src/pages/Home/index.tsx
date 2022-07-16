import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Product from "../../components/Product";
import api from "../../api";

interface ProductInterface {
  name: String;
  price: Number;
  image: String;
  description: String;
}

const Home = () => {
  const [products, setProducts] = useState<Array<ProductInterface>>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await api.get<Array<ProductInterface>>("/products/");
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [products]);

  if (isLoading) {
    return (
      <>
        <Nav />
        <h1 className="font-bold flex justify-center items-center mt-10 text-zinc-800">
          Carregando produtos...
        </h1>
      </>
    );
  }

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
