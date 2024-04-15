
import { API_URL } from "../config"
import AdminEditButton from "./adminEditButton"
import AdminDeleteButton from "./adminDeleteButton"
import { unstable_noStore } from "next/cache"


export default async function AdminProductTable() {
    unstable_noStore();
    const response = await fetch(`${API_URL}/Product/GetListOfAllProducts/`);
    const responseData = await response.json();
    return (
        <div className="pl-72 pr-6 pt-4">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                SKU
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Delete</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {responseData?.map((results: any) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {results.productName}
                                </th>
                                <td className="px-6 py-4">
                                    {results.sku}
                                </td>
                                <td className="px-6 py-4">
                                    {results.productPrice}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <AdminEditButton productId={results.productId} />
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <AdminDeleteButton productId={results.productId} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}