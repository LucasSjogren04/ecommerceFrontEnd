
import { API_URL, pictureURL } from "../../config";

export default async function Product({ params, }: { params: { slug: string } }) {

    const response = await fetch(`${API_URL}/Product/GetProductbySlug/${params.slug}`);
    const data = await response.json();
    return (
        <>
            <div className="flex items-start">
                <div className="w-1/4">
                    <img src={pictureURL + data.productPictureURL} alt={data.productName} className="w-full h-auto" />
                </div>
                <div className="ml-4">
                    <p className="font-thin text-4xl py-2">{data.productName}</p>
                    <p className="font-thin text-3xl pb-10">${data.productPrice}</p>
                    <p className="font-light">{data.productDescription}</p>
                </div>
            </div>





        </>
    )
}