import React from "react";
import Heading from "@/components/general/Heading";
import ProductCard from "@/components/home/ProductCard";
import { products } from "@/mocks/mock.json";
import Loading from "@/app/loading";

const AllProducts = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <div>
        <Heading text={"All Products"} />
        <div className="flex md:gap-10  flex-wrap justify-center mt-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </React.Suspense>
  );
};

export default AllProducts;
