import { unstable_noStore } from "next/cache";
import { API_URL, pictureURL } from "../config";
import SmallProduct from "./smallProduct";
export default async function HomePageProductList() {
    unstable_noStore();
    const response = await fetch(`${API_URL}/Product/GetHomePageProducts`);
    const data = await response.json();

    return (
        <>
            <div className="grid grid-cols-4 gap-2 overflow-y-auto max-h-[410px] xl:max-h-[1200px] shadow-xl">
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
