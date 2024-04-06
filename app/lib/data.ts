import { ApiError } from "next/dist/server/api-utils";
import API_URL from "../config";

export async function GetProduct(productId : string,) {  
    try {
        const response = await fetch(`${API_URL}/api/Product/GetProduct/${productId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export async function SearchForProducts(productName : string) {
    console.log("Searhcing for products")
    try {
        const response = await fetch(`${API_URL}/api/Product/SearchForProducts/${productName}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export async function GetHomePageProducts() {
    try {
        const response = await fetch(`${API_URL}/api/Product/GetHomePageProducts`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export async function UploadProduct(entry: FormData) {
    try {
        const response = await fetch(`${API_URL}/api/Product/UploadProduct`, {
            method : 'POST',
            body : entry
        });

        if(!response.ok) {
            throw new Error(`Failed to Upload product`)
        } else {
            return response;
        }
    } catch (error: any) {
        console.error(`Error uploading product:`, error.message);
        throw new error;
    }
}

export async function DeleteProduct(id: string, fileName: string) {
    try {
        const response = await fetch(`${API_URL}/api/product/DeleteProduct?id=${id}&fileName=${fileName}`, {
            method : `DELETE`,
        });
        
        if(!response.ok) {
            throw new Error(`Failed to delete`)
        } else {
            return response;
        }
    } catch (error : any) {
        console.error(`Error deleting product`, error.message);
        throw new error;
    }
}

export async function GetListOfAllProducts() {
    try {
        const repsonse = await fetch(`${API_URL}/api/GetListOfAllProducts`);
        if(!repsonse.ok){
            throw new Error(`Failed to fetch`)
        } else {
            return repsonse;
        }
    } catch (error : any) {
        console.error(`Error getting list of products`, error.message)
        throw new error;
    }
}

export async function UpdateProduct(entry : FormData) {
    try {
        const response = await fetch (`${API_URL}/api/UpdateProduct`, {
            method: `POST`,
            body: entry
        });
        if(!response.ok) {
            throw new Error(`Failed to fetch`)
        } else {
            return response;
        }
    } catch (error : any) {
        console.error(`Error updating product`, error.message)
        throw new error
    }
}