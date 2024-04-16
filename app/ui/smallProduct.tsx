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
            <div className="col-span-4 rounded overflow-hidden shadow-lg xl:p-3">
                <img src={pictureURL + productPictureURL} alt={productName} className="" />
                <div className="inline py-2">
                    <p className="text-base inline-flex text-tiny xs:text-tiny xl:text-3xl text-left float-start pt-4">{productName}</p>
                    <p className="text-base text-tiny xs:text-tiny xl:text-3xl text-right float-end pt-4">${productPrice}</p>
                </div>
            </div>
        </Link>

    );
}