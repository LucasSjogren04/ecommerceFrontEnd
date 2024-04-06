import { API_URL, pictureURL } from "../config";

export default async function HomePageProductList({ query = `` }: { query?: string; }) {
    const response = await fetch(`${API_URL}/Product/SearchForProducts/${query}`);
    const data = await response.json();

    

    return (
        <div className="flex justify-center min-w-full">
            {data?.map((result: any) => (
                <div key={result.productId} className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img src={pictureURL + result.productPictureURL} alt={result.productName} className="w-full" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{result.productName}</div>
                        <p>{result.productPrice}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
