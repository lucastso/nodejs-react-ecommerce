const Product = () => {
  return (
    <div className="col-span-1 rounded-lg border border-zinc-100 bg-custom h-[24rem] flex justify-between flex-col text-zinc-800">
      <section className="w-full">
        <img
          src="https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1093&q=80"
          alt="Product image"
          className="w-full h-56 object-cover rounded-t-lg"
        />
        <h1 className="px-4 pt-2 font-bold">Titulo</h1>
      </section>
      <section className="px-4 pb-4 flex flex-col text-zinc-800">
        <p className="text-sm opacity-50 underline">Price:</p>
        <div className="flex justify-between items-end">
          <h1 className="font-bold text-xl">R$ 80</h1>
          <img
            src="/addcart.png"
            alt="Add to cart"
            width={40}
            className="cursor-pointer"
          />
        </div>
      </section>
    </div>
  );
};

export default Product;
