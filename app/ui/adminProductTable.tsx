import { table } from "console"
import { SearchForProducts } from "../lib/data"
import {API_URL} from "../config"

export default async function AdminProductTable() {
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z" />
                                    </svg>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}