import Image from 'next/image';
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
      <Image src={detailProduct.thumbnail} alt={detailProduct.thumbnail} width={200} height={200}></Image>
      <p>{`Merek: ${detailProduct.brand}`}</p>
      <p>{`Diskon: ${detailProduct.discountPercentage}`}</p>
      <p>{`Kategori: ${detailProduct.category}`}</p>
      <p>{`Rating: ${detailProduct.rating}`}</p>
      <p>{`Stock: ${detailProduct.stock}`}</p>
      <p>{`Harga: ${detailProduct.price}`}</p>
      <p>{detailProduct.description}</p>
    </>
  );
}