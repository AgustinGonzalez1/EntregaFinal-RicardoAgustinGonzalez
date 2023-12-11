export const getProducts = async (category) => {
  try {
    const data = await fetch(
      `${
        process.env.VERCEL_URL || 'http://localhost:3000'
      }/api/productos/${category}`,
      {
        cache: 'no-cache',
      }
    ).then((r) => r.json());

    return data;
  } catch (err) {
    return err;
  }
};
