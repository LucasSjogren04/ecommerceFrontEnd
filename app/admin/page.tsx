'use client'
import AdminProductTable from "../ui/adminProductTable";
import { useState } from "react";
export default async function Admin() {
    const [productForEdit, setProductForEdit] = useState<string | null>(null);

    const chooseProductForEdit = async(productId: string) => {
        setProductForEdit(productId);
    }
    return (
        <>
            <div className="min-w-max bg-zinc-700 flex">
                <div className=" justify-start font-light text-3xl px-10 py-2">Administrator</div>
            </div>

            <AdminProductTable chooseProductForEdit={chooseProductForEdit}/>
        </>

    )
}