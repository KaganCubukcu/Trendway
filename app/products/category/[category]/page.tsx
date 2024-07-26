import React from 'react'
import ProductCard from '@/components/home/ProductCard';


async function getProductsByCategory(category: string) {
  const res = await fetch(`https://dummyjson.com/products/category/${category}`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return data.products;
}

const CategoryProductsPage = async ({params}: {params: {category: string}}) => {
  const products = await getProductsByCategory(params.category);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">{params.category} Ürünleri</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryProductsPage;