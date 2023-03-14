import Link from 'next/link';
const getPost = async () => {
  const products = await fetch('https://dummyjson.com/products?limit=5');
  const responseJson = await products.json();
  return responseJson;
}


export default async function Postingan({children}) {
  const { products } = await getPost();
  return (
    <>
      <h1>Postingan Page</h1>
      {
        products.map((product, key) => (
          <div key={key}>
            <Link href={`/postingan/${product.id}`}>{`${product.id} - ${product.title}`}</Link>
            <p>{product.description}</p>
          </div>
        ))
      }
      <p>{children}</p>
    </>
  );
}