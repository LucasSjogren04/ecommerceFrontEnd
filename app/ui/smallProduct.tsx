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
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={pictureURL + productPictureURL} alt={productName} className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{productName}</div>
                    <p>{productPrice}</p>
                </div>
            </div>
        </Link>

    );
}