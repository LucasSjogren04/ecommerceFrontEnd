'use client'
import { useEffect, useState } from "react";
import { useAdminContext } from "../provider"
import { API_URL } from "../config";
export default function AdminEditForm() {
    interface InputsWithStateState {
        name: string;
        sku: string;
        price: string;
        description: string;
        fileInput: File | null;
    }
    const { setEditing, productForEdit } = useAdminContext();
    const [submiting, setSubmiting] = useState(false)
    const [inputValues, setInputValues] = useState<InputsWithStateState>({
        name: '',
        sku: '',
        price: '',
        description: '',
        fileInput: null,
    });

    useEffect(() => {
        const GetProductForEdit = async () => {
            try {
                const response = await fetch(`${API_URL}/Product/GetProduct/${productForEdit}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch product data");
                }
                const responseData = await response.json();
                setInputValues({
                    name: responseData.productName,
                    sku: responseData.productName,
                    price: responseData.productPrice.toString(),
                    description: responseData.productDescription,
                    fileInput: null,
                });
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };
        GetProductForEdit();
    }, [])


    useEffect(() => {
        const handleSubmit = async () => {

            const formData = new FormData();
            formData.append('ProductId', productForEdit);
            formData.append('ProductName', inputValues.name);
            formData.append('SKU', inputValues.sku);
            formData.append('ProductPrice', inputValues.price);
            formData.append('ProductDescription', inputValues.description);
            if (inputValues.fileInput) {
                formData.append('Picture', inputValues.fileInput);
            }

            try {
                const response = await fetch(`${API_URL}/product/UpdateProduct`, {
                    method: 'PUT',
                    body: formData,
                });

                if (response.ok) {
                    console.log('Form submitted successfully');
                } else {
                    console.error('Form submission failed');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        };
        if (submiting) {
            handleSubmit();
        }
    }, [submiting])

    const submit = () => {
        setSubmiting(true);
        setTimeout(() => setEditing(false), 300);
    }
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        setInputValues({ ...inputValues, fileInput: file });
    };
    return (
        <div className="px-96">
             <div className="px-96 pt-20">
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium">Product name</label>
                    <input type="text" defaultValue={inputValues.name} onChange={(e) => setInputValues({ ...inputValues, name: e.target.value })} className="block w-full p-2 border-2 text-gray-900  border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 " />
                </div>
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium">SKU</label>
                    <input type="text" defaultValue={inputValues.sku} onChange={(e) => setInputValues({ ...inputValues, sku: e.target.value })} className="bg-gray-50 p-2 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full " />
                </div>
                <div>
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium">Price</label>
                    <input type="text" defaultValue={inputValues.price} onChange={(e) => setInputValues({ ...inputValues, price: e.target.value })} className="block w-full p-2 border-2 text-gray-900  border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium">Description</label>
                    <textarea defaultValue={inputValues.description} onChange={(e) => setInputValues({ ...inputValues, description: e.target.value })} className="block w-full p-2 border-2 min-h-64 text-gray-900  border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium" htmlFor="file_input">Picture</label>
                    <input onChange={handleFileChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id="file_input" type="file" />
                </div>
            </div>
            
            <div className="flex justify-center py-3">
                <div className="px-2">
                    <div className="min-w-36 bg-blue-700 flex justify-center cursor-pointer rounded" onClick={submit}>
                        <div className="text-center p-5 font-bold">Update </div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="min-w-36 bg-red-600 flex justify-center cursor-pointer rounded" onClick={() => setEditing(false)}>
                        <div className="text-center p-5 font-bold">Cancel</div>
                    </div>
                </div>
            </div>
        </div>
    )
}