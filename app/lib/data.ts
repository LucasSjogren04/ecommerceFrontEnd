import API_URL from "../config";

export async function GetProduct(productId : string,) {
    
    interface UserData {
        name: string;
        email: string;
        password: string;
    }
    
    try {
        const response = await fetch(`${API_URL}/api/Product/GetProduct/${productId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        return await responseData;
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export async function SearchForProducts(productName : string) {
    try {
        const response = await fetch(`${API_URL}/api/Product/SearchForProducts/${productName}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        return await responseData;
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
        return await responseData;
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export async function UploadProduct(entry: FormData){
    try {
        const response = await fetch(`${API_URL}/apiProduct/UploadProduct`, {
            method : 'POST',
            body : entry
        });

        if(!response.ok) {
            throw new Error(`Failed to Upload product`)
        }

        const result = await response.text();
        if(result === `Data inserted successfully`) {
            console.log(`Product uploaded`);
            
        }
    }
}
