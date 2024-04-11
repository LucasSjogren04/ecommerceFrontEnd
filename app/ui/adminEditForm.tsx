'use client'
import { useEffect, useState } from "react";
import { useAdminContext } from "../provider"
import { API_URL } from "../config";
export default function AdminEditForm() {
    interface InputsWithStateState {
        name: string;
        price: string;
        description: string;
        fileInput: File | null;
    }
    const { setEditing, productForEdit } = useAdminContext();
    const [submiting, setSubmiting] = useState(false)
    const [inputValues, setInputValues] = useState<InputsWithStateState>({
        name: '',
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
        <div>
            <div className="p-3">
                <label htmlFor="input">Product name</label>
                <br />
                <input className="px-1 outline-dotted" type="text" defaultValue={inputValues.name} onChange={(e) => setInputValues({ ...inputValues, name: e.target.value })} />
            </div>
            <div className="p-3">
                <label htmlFor="input">Price</label>
                <br />
                <input className="px-1 outline-dotted" type="text" defaultValue={inputValues.price} onChange={(e) => setInputValues({ ...inputValues, price: e.target.value })} />
            </div>
            <div className="p-3">
                <label htmlFor="input">Description</label>
                <br />
                <input className="px-1 outline-dotted" type="text" defaultValue={inputValues.description} onChange={(e) => setInputValues({ ...inputValues, description: e.target.value })} />
            </div>
            <div className="p-3">
                <label htmlFor="input">Picture</label>
                <br />
                <input className="px-1 outline-dotted" type="file" onChange={handleFileChange} />
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