import DetailClient from "@/components/products-detail/DetailClient";
import { products } from "@/mocks/mock.json";
interface ProductDetailPageProps {
  id?: number;
}

const ProductDetailPage = ({ params }: { params: ProductDetailPageProps }) => {
  const { id } = params;
  const product = products.find((product) => product.id == id);

  return (
    <div>
      <DetailClient product={product} />
    </div>
  );
};

export default ProductDetailPage;
