'use client'
import { useAdminContext } from "../provider"
import AdminEditForm from "./adminEditForm";
import AdminCreateForm from "./adminCreateForm";
import AdminDeletePopUp from "./adminDeletePopUp";
export default function AdminManager({ children }: { children: React.ReactNode }) {
    const { editing, creating, deleting, setCreating } = useAdminContext();
    return (
        <>
            <div className="bg-gray-400 cursor-pointer max-w-xs" onClick={() => setCreating(true)}>
                <div className="text-center p-2 font-light">New Product</div>
            </div>
            {!editing && !creating && !deleting &&
                <>{children}</>
            }
            {editing &&
                <AdminEditForm />
            }
            {creating &&
                <AdminCreateForm />
            }
            {deleting &&
                <AdminDeletePopUp />
            }
        </>
    )
}