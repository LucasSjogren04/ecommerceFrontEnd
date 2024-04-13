import Link from "next/link";
import fflogo from "@/public/FreakyFashionLogo.png"
import FakeSearch from "@/app/ui/fakeSearch";
import { API_URL, pictureURL } from "../../config";

export default async function Product({ params, }: { params: { slug: string } }) {

    const response = await fetch(`${API_URL}/Product/GetProductbySlug/${params.slug}`);
    const data = await response.json();
    return (
        <>
            <div className="py-2 px-3 flex items-center xl:p-8">
                <Link href="http://localhost:3000">
                    <img className="max-w-32 xl:min-w-80" src={fflogo.src} alt="logo" />
                </Link>
                <FakeSearch placeholder="Search products..." />
            </div>
            <div className="flex p-2 xl:px-8">
                <div className="">
                    <img src={pictureURL + data.productPictureURL} alt={data.productName} className="rounded-md xl:max-h-[700px]" />
                </div>
                <div className="px-3">
                    <p className="font-light text-base xl:text-3xl py-2 whitespace-nowrap">{data.productName}</p>
                    <p className="font-light text-xs xl:text-xl pb-3 ">{data.productDescription}</p>
                    <p className="font-light text-xs xl:text-xl">${data.productPrice}</p>
                    <div className="pt-5 xl:pt-10">
                        <div className="max-w-24 xl:max-w-36 bg-slate-100 flex justify-center cursor-pointer rounded border-2 border-stone-950">
                            <div className="text-center text-xs xl:text-xl font-light p-1">Add to chart</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center space-x-2 text-tiny xl:text-2xl py-2">
            </div>
            <hr />
            <div className="flex justify-around text-tiny py-2 xl:py-8">
                <div className="">
            <div>
                <h2 className="font-light text-xs pb-1 xl:text-4xl">Shopping</h2>
                <ul className="xl:text-xl">
                    <li>Winter Jackets</li>
                    <li>Puffer Jackets</li>
                    <li>Anoraks</li>
                    <li>Trenchcoat</li>
                </ul>
            </div>
        </div>
        <div>
            <div>
                <h2 className="font-light text-xs pb-1 xl:text-4xl">Profile</h2>
                <ul className="xl:text-xl">
                    <li>My orders</li>
                    <li>My account</li>
                </ul>
            </div>
        </div>
        <div>
            <div>
                <h2 className="font-light text-xs pb-1 xl:text-4xl">Customer service</h2>
                <ul className="xl:text-xl">
                    <li>Return policy</li>
                    <li>Our commitment</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-tiny xl:text-xl pb-2">
        ©Freaky Fashion
      </div>
        </>
    )
}