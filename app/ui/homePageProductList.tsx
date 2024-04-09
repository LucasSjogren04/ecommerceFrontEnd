import { API_URL, pictureURL } from "../config";
import SmallProduct from "./smallProduct";
export default async function HomePageProductList({ query = "" }: { query?: string; }) {
    const response = await fetch(`${API_URL}/Product/SearchForProducts/${query}`);
    const data = await response.json();
    console.log(data)



    return (
        <>
            <div>
                <p className="text-center font-light text-4xl">Found {data.length} matches</p>
            </div>
            <div className="flex justify-center min-w-full">
                {data?.map((product : any) => (
                    <SmallProduct
                        key={product.productId}
                        productName={product.productName}
                        productURLSlug={product.productURLSlug}
                        productPictureURL={product.productPictureURL}
                        productPrice={product.productPrice}
                    />
                ))}
            </div>
        </>

    );
}
