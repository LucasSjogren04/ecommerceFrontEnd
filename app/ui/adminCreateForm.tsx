'use client'
import { useEffect, useState } from "react";
import { useAdminContext } from "../provider"
import { API_URL } from "../config";
export default function AdminCreateForm() {
    interface InputsWithStateForUploadState {
        name: string;
        price: string;
        description: string;
        fileInput: File | null;
    }
    const { setCreating } = useAdminContext();
    const [submiting, setSubmiting] = useState(false)
    const [inputValues, setInputValues] = useState<InputsWithStateForUploadState>({
        name: '',
        price: '',
        description: '',
        fileInput: null,
    });

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
                const response = await fetch(`${API_URL}/product/UploadProduct`, {
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
        setTimeout(() => setCreating(false), 300);
    }
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        setInputValues({ ...inputValues, fileInput: file });
    };
    return (
        <div>
            <input type="text" onChange={(e) => setInputValues({ ...inputValues, name: e.target.value })}/>
            <input type="text" onChange={(e) => setInputValues({ ...inputValues, price: e.target.value })}/>
            <input type="text" onChange={(e) => setInputValues({ ...inputValues, description: e.target.value })}/>
            <input type="file" onChange={handleFileChange}/>
            <div className="max-w-20 bg-blue-700 flex justify-center cursor-pointer" onClick={submit}>
                <div className="text-center p-5 font-bold">Create New</div>
            </div>
            <div className="max-w-20 bg-red-600 flex justify-center cursor-pointer" onClick={() => setCreating(false)}>
                <div className="text-center p-5 font-bold">Cancel</div>
            </div>
        </div>
    )
}