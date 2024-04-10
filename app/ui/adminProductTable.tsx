import { table } from "console"
import { SearchForProducts } from "../lib/data"
import {API_URL} from "../config"
import AdminEditButton from "./adminEditButton"
import AdminDeleteButton from "./adminDeleteButton"
import { unstable_noStore } from "next/cache"


export default async function AdminProductTable() {
    unstable_noStore();
    const response = await fetch(`${API_URL}/Product/GetListOfAllProducts/`);
    const responseData = await response.json();
    return (

        <div className="flex justify-center py-5 ">
            <table className="shadow-2xl rounded-2xl">
                <thead className="bg-cyan-400">
                    <tr className="">
                        <th className="px-4 py-2">ProductId</th>
                        <th className="px-4 py-2">ProductName</th>
                        <th className="px-4 py-2">ProductPrice</th>
                        <th className="px-4 py-2">ProductPictureURL</th>
                        <th className="whitespace-nowrap py-3 pl-6 pr-3">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-slate-200">
                    {responseData?.map((results: any) => (
                        <tr key={results.ProductId} className="hover:bg-slate-400 cursor-pointer">
                            <td className="px-4 py-2">{results.productId}</td>
                            <td className="px-4 py-2">{results.productName}</td>
                            <td className="px-4 py-2">{results.productPrice}</td>
                            <td className="px-4 py-2">{results.productPictureURL}</td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex justify-end gap-3">
                                    <AdminEditButton productId={results.productId}/>
                                    <AdminDeleteButton productId={results.productId}/>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}