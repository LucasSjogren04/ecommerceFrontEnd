import Link from "next/link";
import { pictureURL } from "../config"
export default function SmallProduct({ 
    productName,
    productURLSlug,
    productPictureURL,
    productPrice 
}: { 
    productName: string;
    productURLSlug: string;
    productPictureURL: string;
    productPrice: string;
}) {
    return (

        <Link href={`/products/${productURLSlug}`}>
            <div className="col-span-4 rounded overflow-hidden shadow-lg xl:p-5">
                <img src={pictureURL + productPictureURL} alt={productName} className="w-full" />
                <div className="inline">
                    <p className="text-base inline-flex text-tiny xs:text-tiny xl:text-4xl text-left float-start">{productName}</p>
                    <p className="text-base text-tiny xs:text-tiny xl:text-4xl text-right float-end">${productPrice}</p>
                </div>
            </div>
        </Link>

    );
}