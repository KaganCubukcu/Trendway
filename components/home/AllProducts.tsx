import React, { Suspense } from "react";
import Heading from "@/components/general/Heading";
import ProductCard from "@/components/home/ProductCard";
import Loading from "@/app/loading";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

async function getProducts(page: number, limit: number){
  let skip = (page - 1) * limit;
  const res = await fetch(`https://dummyjson.com/products?page=${page}&limit=${limit}&skip=${skip}`);
  // Check if res is not ok
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  console.log(data)
  return {products: data.products, total: data.total};
}

const Pagination = ({totalPages, currentPage}: {totalPages: number, currentPage: number}) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-5">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <a
          key={pageNumber}
          href={`/?page=${pageNumber}`}
          className={`mx-1 px-4 py-2 border rounded-lg transition-colors duration-300 ${
            pageNumber === currentPage ? 'bg-early-dawn-300 text-white border-early-dawn-500' : 'bg-white text-early-dawn-500 border-early-dawn-500 hover:bg-early-dawn-500 hover:text-white'
          }`}
        >
          {pageNumber}
        </a>
      ))}
    </div>
  );
}

const ProductsList = async ({page, limit}: {page: number, limit: number}) => {
  const {products, total} = await getProducts(page, limit);
  const totalPages = Math.ceil(total / limit);
  return (
    <>
    <div className="flex md:gap-10  flex-wrap justify-center mt-2">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    <Pagination totalPages={totalPages} currentPage={page} />
    </>
  );
};

const AllProducts = ({searchParams}: {searchParams: {page?: string}}) => {
  const page = parseInt(searchParams.page || '1');
  const limit = 20
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Heading text={"All Products"} />
        <ProductsList page={page} limit={limit} />
      </div>
    </Suspense>
  );
};

export default AllProducts;
