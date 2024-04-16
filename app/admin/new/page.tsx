'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAdminContext } from "@/app/provider"
import { API_URL } from "@/app/config";
export default function AdminCreateForm() {
    interface InputsWithStateForUploadState {
        name: string;
        sku: string;
        price: string;
        description: string;
        fileInput: File | null;
    }
    const { setCreating } = useAdminContext();
    const [submiting, setSubmiting] = useState(false)
    const [inputValues, setInputValues] = useState<InputsWithStateForUploadState>({
        name: '',
        sku: '',
        price: '',
        description: '',
        fileInput: null,
    });

    useEffect(() => {
        const handleSubmit = async () => {

            const formData = new FormData();
            formData.append('ProductName', inputValues.name);
            formData.append('SKU', inputValues.sku);
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
        <>
         <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 text-white">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <p className="xl:text-4xl">Administration</p>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link href="http://localhost:3000/admin" className="flex items-center py-2 lg:text-xl rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group text-white">
                                <span className="ms-3">Dashboard</span>

                            </Link>
                        </li>
                        <li>
                            <Link href="http://localhost:3000/admin/new" className="flex items-center py-2 lg:text-xl rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group text-white">
                                <span className="ms-3">Add Product</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className="px-96 pt-20">
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium">Product name</label>
                    <input type="text" onChange={(e) => setInputValues({ ...inputValues, name: e.target.value })} className="block w-full p-2 border-2 text-gray-900  border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 " />
                </div>
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium">SKU</label>
                    <input type="text" onChange={(e) => setInputValues({ ...inputValues, sku: e.target.value })} className="bg-gray-50 p-2 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full " />
                </div>
                <div>
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium">Price</label>
                    <input type="text" onChange={(e) => setInputValues({ ...inputValues, price: e.target.value })} className="block w-full p-2 border-2 text-gray-900  border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium">Description</label>
                    <textarea onChange={(e) => setInputValues({ ...inputValues, description: e.target.value })} className="block w-full p-2 border-2 min-h-64 text-gray-900  border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium" htmlFor="file_input">Picture</label>
                    <input onChange={handleFileChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id="file_input" type="file" />
                </div>
            </div>

            <div className="flex justify-center py-3">
                <div className="px-2">
                    <div className="min-w-36 bg-blue-700 flex justify-center cursor-pointer rounded" onClick={submit}>
                        <div className="text-center p-5 font-bold">Create New</div>
                    </div>
                </div>
            </div>
        </>

    )
}