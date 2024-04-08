
import AdminProductTable from "../ui/adminProductTable";
import AdminManager from "../ui/adminManager";
export default function Admin() {
    return (
        <>
            <div className="min-w-max bg-zinc-700 flex">
                <div className=" justify-start font-light text-3xl px-10 py-2">Administrator</div>
            </div>
            <AdminManager>
                <AdminProductTable />
            </AdminManager>
            
            </>

            )
}