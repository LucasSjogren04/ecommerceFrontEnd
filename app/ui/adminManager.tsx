'use client'
import { useAdminContext } from "../provider"
import AdminEditForm from "./adminEditForm";
import AdminCreateForm from "./adminCreateForm";
import AdminDeletePopUp from "./adminDeletePopUp";
export default function AdminManager({ children }: { children: React.ReactNode }) {
    const { editing, creating, deleting, setCreating } = useAdminContext();
    return (
        <>
            {!editing && !creating && !deleting &&
                <>
                    <div className="py-2 px-7 xl:py-3 xl:pr-96 flex justify-end">
                        <div className="bg-gray-400 cursor-pointer max-w-24 xl:max-w-36" onClick={() => setCreating(true)}>
                            <div className="text-xs text-center p-2 font-light xl:text-lg">New Product</div>
                        </div>
                    </div>
                    {children}
                </>
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