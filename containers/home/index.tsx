import Category from "@/components/home/Category";
import AllProducts from "@/components/home/AllProducts";

const HomeContainer = ({searchParams}: {searchParams: {page?: string}}) => {
  return (
    <div>
      <Category />
      <AllProducts searchParams={searchParams} />
    </div>
  );
};

export default HomeContainer;
