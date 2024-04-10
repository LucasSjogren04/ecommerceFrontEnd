'use client'
import { useEffect, useState } from "react";
import { useAdminContext } from "../provider"
import { API_URL } from "../config";
export default function AdminDeletePopUp() {
    const { setDeleting, productForEdit } = useAdminContext();
    const [submiting, setSubmiting] = useState(false)


    useEffect(() => {
        const handleSubmit = async () => {

            try {
                const response = await fetch(`${API_URL}/product/DeleteProduct${productForEdit}`, {
                    method: 'DELETE',
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
        setTimeout(() => setDeleting(false), 300);
    }
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded shadow-lg">
            <p>Do you really want to delete?</p>
            <div className="flex justify-center mt-4">
                <button className="bg-blue-700 text-white px-5 py-2 rounded mr-4 cursor-pointer" onClick={submit}>
                    Delete
                </button>
                <button className="bg-red-600 text-white px-5 py-2 rounded cursor-pointer" onClick={() => setDeleting(false)}>
                    Cancel
                </button>
            </div>
        </div>
    </div>
    )
}