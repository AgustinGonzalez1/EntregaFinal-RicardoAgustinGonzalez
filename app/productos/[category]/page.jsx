import { getProducts } from '@/app/api/productos/[category]/products';
import CardProductContainer from '@/components/products/CardProductContainer';
import { redirect } from 'next/navigation';

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `CORONA - ${params.category.toUpperCase()}`,
  };
}

export function generateStaticParams() {
  return ['todos', 'aros', 'anillos', 'collares', 'pulseras'];
}

const FilterProducts = async ({ params }) => {
  const { category } = params;

  const data = await getProducts(category);

  const title = category === 'todos' ? 'Todos los productos' : category;

  if (
    category !== 'todos' &&
    category !== 'aros' &&
    category !== 'anillos' &&
    category !== 'collares' &&
    category !== 'pulseras'
  ) {
    redirect('/not-found');
  }

  return (
    <section className='bg'>
      <div className='container mx-auto'>
        <h2
          className={`text-3xl text-center my-5 ${
            category !== 'todos' ? 'capitalize' : ''
          }`}
        >
          {title}
        </h2>
        <CardProductContainer data={data} />
      </div>
    </section>
  );
};
export default FilterProducts;
