'use client'
import { useEffect, useState } from "react";
import { useAdminContext } from "../provider"
import { API_URL } from "../config";
export default function AdminEditForm(productId: string) {
    interface InputsWithStateState {
        name: string;
        price: string;
        description: string;
        fileInput: File | null;
    }
    const { editing, setEditing } = useAdminContext();
    const [submiting, setSubmiting] = useState(false)
    const [inputValues, setInputValues] = useState<InputsWithStateState>({
        name: '',
        price: '',
        description: '',
        fileInput: null,
    });

    useEffect(() => {
        const GetProductForEdit = async () => {
            const response = await fetch(`${API_URL}/Product/GetProduct/${productId}`);
            const responseData = await response.json();
        }

    })


    useEffect(() => {
        const handleSubmit = async (event: any) => {
            event.preventDefault();

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
                    // Handle success
                } else {
                    console.error('Form submission failed');
                    // Handle error
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                // Handle error
            }
        };
        if (submiting) {
            handleSubmit();
        }
    }, [submiting])

    return (
        <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="file" />
            <div className="max-w-20 bg-red-600 flex justify-center cursor-pointer" onClick={() => setEditing(false)}>
                <div className="text-center p-5 font-bold">Cancel</div>
            </div>
        </div>
    )
}