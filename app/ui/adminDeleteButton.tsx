"use client"

import { useAdminContext } from "../provider"


export default function AdminDeleteButton(props: any) {
    const { setDeleting, setProductForEdit } = useAdminContext();

    const startdelete = () => {
        setProductForEdit(props.productId)
        setDeleting(true)
    }
    return (
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={startdelete}>Delete</a>
    )
}