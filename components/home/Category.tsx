import { formatCategoryName } from "@/utils/stringHelpers";
import Link from "next/link";
import React from "react";

async function getAllCategories() {
  const response = await fetch("https://dummyjson.com/products/categories");
  const data = response.json();
  return data;
}

const Category: React.FC = async () => {
  const categoryList = await getAllCategories();
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-10 my-5 md:my-10">
      {categoryList.map((category: any, index: number) => (
        <div key={index} className="border border-1 border-early-dawn-500 rounded-xl px-4 py-2 cursor-pointer text-center flex justify-center hover:bg-early-dawn-600 hover:text-white hover:transition-all hover:duration-300">
          <Link href={`/products/category/${formatCategoryName(category.name)}`}>
            <span>{category.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
