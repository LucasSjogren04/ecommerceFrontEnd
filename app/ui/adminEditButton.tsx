"use client"

import { useAdminContext } from "../provider"


export default function AdminEditButton(props: any) {
    const { setEditing, setProductForEdit } = useAdminContext();

    const edit = () => {
        setProductForEdit(props.productId)
        setEditing(true)
    }
    return (
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={edit}>Edit</a>
    )
}