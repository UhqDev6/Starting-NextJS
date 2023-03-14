const getDetailPost = async (id) => {
  const detailPost = await fetch(`https://dummyjson.com/products/${id}`);
  const responseJson = await detailPost.json();
  return responseJson;
}

export default async function PageId({ params }) {
  const detailProduct = await getDetailPost(params.id);
  console.log(detailProduct);
  return (
    <>
      <h1>{detailProduct.title}</h1>
      <p>{detailProduct.description}</p>
      <p>{`Harga : ${detailProduct.price}`}</p>
    </>
  );
}