import { getProduct } from '@/app/api/detail/[slug]/product';
import Loading from '@/components/loading/Loading';
import ProductDetailContainer from '@/components/products/ProductDetailContainer';
import { Suspense } from 'react';

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `CORONA - ${params.slug}`,
  };
}

const page = async ({ params }) => {
  const { slug } = params;
  const product = await getProduct(slug);

  return (
    <main className='flex items-center h-[calc(100vh-75px)]'>
      <section className='container mx-auto'>
        <Suspense fallback={<Loading />}>
          <ProductDetailContainer product={product} />
        </Suspense>
      </section>
    </main>
  );
};
export default page;
