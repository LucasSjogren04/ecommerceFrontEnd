'use client'
import { useContext, useState, createContext } from "react";

export const AdminContext = createContext(null);

export default function AdminContextProvider(){
    const [productForEdit, setProductForEdit] = useState<string | null>(null);

    const chooseProductForEdit = async(productId: string) => {
        setProductForEdit(productId);
    }

    return(
        
    )
}