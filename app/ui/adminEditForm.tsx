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
    },[])


    useEffect(() => {
        const handleSubmit = async () => {

            const formData = new FormData();
            formData.append('ProductName', inputValues.name);
            formData.append('ProductPrice', inputValues.price);
            formData.append('ProductDescription', inputValues.description);
            if (inputValues.fileInput) {
                formData.append('Picture', inputValues.fileInput);
            }

            try {
                const response = await fetch('YOUR_API_ENDPOINT', {
                    method: 'POST',
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
        setEditing(false);
    }
    return (
        <div>
            <input type="text" defaultValue={inputValues.name}/>
            <input type="text" defaultValue={inputValues.price}/>
            <input type="text" defaultValue={inputValues.description}/>
            <input type="file" />
            <div className="max-w-20 bg-blue-700 flex justify-center cursor-pointer" onClick={submit}>
                <div className="text-center p-5 font-bold">Update</div>
            </div>
            <div className="max-w-20 bg-red-600 flex justify-center cursor-pointer" onClick={() => setEditing(false)}>
                <div className="text-center p-5 font-bold">Cancel</div>
            </div>
        </div>
    )
}