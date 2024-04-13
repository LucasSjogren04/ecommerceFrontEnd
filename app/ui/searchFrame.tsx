'use client'
import { unstable_noStore } from "next/cache";
import { API_URL, pictureURL } from "../config";
import SmallProduct from "./smallProduct";
import { useContext, useEffect, useState } from "react";
import { useAdminContext } from "../provider";
export default function SearchFrame({ query = "" }: { query?: string; }) {
    const [apidata, setApiData] = useState([]);
    const {searchValue} = useAdminContext()
    
    useEffect(() => {
        const searchProducts = async() => {
            unstable_noStore();
            const response = await fetch(`${API_URL}/Product/SearchForProducts/${searchValue}`);
            const data = await response.json();
            setApiData(data);
        }
        searchProducts();
    },[searchValue])

    return (
        <>
            {apidata &&
                <>
                    {query &&
                        <div>
                            <p className="text-center font-light xl:text-4xl xs:text-xl">Found {apidata.length} match(es) for "{query}"</p>
                        </div>
                    }
                    <div className="grid grid-cols-4 gap-2 xl:gap-5 p-2">
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
