const Category = () => {
  const categoryList = [
    {
      name: "Electronics",
    },
    {
      name: "Furniture",
    },
    {
      name: "Grocery",
    },
    {
      name: "Toys",
    },
    {
      name: "Books",
    },
    {
      name: "Sports",
    },
    {
      name: "Beauty",
    },
  ];
  return (
    <div className="flex items-center justify-center gap-3 md:gap-10 my-5 md:my-10 overflow-x-auto">
      {categoryList.map((category, index) => (
        <div
          key={index}
          className="border border-1 rounded-full min-w-[100px] px-4 py-2 cursor-pointer text-center flex flex-1 justify-center "
        >
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Category;
