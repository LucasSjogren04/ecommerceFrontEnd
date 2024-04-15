import Link from "next/link";
import AdminProductTable from "../ui/adminProductTable";
import AdminManager from "../ui/adminManager";
export default function Admin() {
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
                            <Link href="admin/new" className="flex items-center py-2 lg:text-xl rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group text-white">
                                <span className="ms-3">Add Product</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="">
                <AdminManager>
                    <AdminProductTable />
                </AdminManager>
            </div>
        </>
    )
}