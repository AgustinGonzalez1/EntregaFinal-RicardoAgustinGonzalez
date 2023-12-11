export const getProduct = async (slug) => {
  try {
    const product = await fetch(
      `${process.env.VERCEL_URL || 'http://localhost:3000'}/api/detail/${slug}`,
      {
        cache: 'no-cache',
      }
    ).then((r) => r.json());

    return product;
  } catch (err) {
    console.log(err);
  }
};
