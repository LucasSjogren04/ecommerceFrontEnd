'use client'
import { unstable_noStore } from "next/cache";
import { API_URL, pictureURL } from "../config";
import SmallProduct from "./smallProduct";
import { useEffect, useState } from "react";
export default function SearchFrame({ query = "" }: { query?: string; }) {
    const [apidata, setApiData] = useState([]);
    
    useEffect(() => {
        const searchProducts = async() => {
            unstable_noStore();
            const response = await fetch(`${API_URL}/Product/SearchForProducts/${query}`);
            const data = await response.json();
            setApiData(data);
        }
        searchProducts();
    },[query])

    return (
        <>
            {apidata &&
                <>
                    <div>
                        <p className="text-center font-light text-4xl">Found {apidata.length} match(es) for "{query}"</p>
                    </div>
                    <div className="flex justify-center min-w-full">
                        {apidata?.map((product: any) => (
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
            }
        </>
    );
}
