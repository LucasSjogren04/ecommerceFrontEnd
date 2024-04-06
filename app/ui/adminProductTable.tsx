import { table } from "console"
import { SearchForProducts } from "../lib/data"
import API_URL from "../config"

export default async function AdminProductTable() {
    const response = await fetch(`${API_URL}/Product/GetListOfAllProducts/`);
    const responseData = await response.json();
    return (

        <div className="flex justify-center">
            <table className="">
                <thead className="bg-cyan-400">
                    <tr className="">
                        <th className="px-4 py-2">ProductId</th>
                        <th className="px-4 py-2">ProductName</th>
                        <th className="px-4 py-2">ProductPrice</th>
                        <th className="px-4 py-2">ProductPictureURL</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-400">
                    {responseData?.map((results: any) => (
                        <tr key={results.ProductId}>
                            <td className="px-4 py-2">{results.productId}</td>
                            <td className="px-4 py-2">{results.productName}</td>
                            <td className="px-4 py-2">{results.productPrice}</td>
                            <td className="px-4 py-2">{results.productPictureURL}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}