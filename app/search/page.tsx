'use client'
import fflogo from "@/public/FreakyFashionLogo.png"
import SearchFrame from "../ui/searchFrame";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useAdminContext } from "../provider"
import Search from "../ui/search";
import { useEffect } from "react";
import Link from "next/link";


export default function SearchPage({ searchParams, }: { searchParams?: { q: string; }; }) {
    const { setsearchValue, searchValue, doneInitialSearch, setDoneInitialSearch } = useAdminContext()
    const pathname = usePathname();
    const { replace } = useRouter();
    const q = searchParams?.q || '';

    //This is supaaaa dumb, me will forget how work next time me look at code, me no able to fix if brake
    useEffect(() => {
        const setInitialState = () => {
            console.log("Setting search")

            function setQueryToState(){
                console.log("setQueryToState")
                const params = new URLSearchParams(searchParams);
                params.set('q', searchValue)
                replace(`${pathname}?${params.toString()}`);
                
            }
            function handleSearch(term: any) {
                console.log("handleSearch")
                const params = new URLSearchParams(searchParams);
                if (term) {
                    params.set('q', term);
                } else {
                    params.delete('q');
                }
                replace(`${pathname}?${params.toString()}`);
                setsearchValue(term)
            }
            if(searchValue !== "") {
                setQueryToState()
            } else {
                handleSearch(searchParams?.q);
            }

        }
        if (!doneInitialSearch) {
            setInitialState();
            setDoneInitialSearch(true)
        }

    }, [searchParams?.q])

    return (
        <>
            <div className="py-2 px-3 flex items-center xl:p-8">
                <Link href="http://localhost:3000">
                    <img className="max-w-32 xl:min-w-80" src={fflogo.src} alt="logo" />
                </Link>
                <Search placeholder="Search products..." />
            </div>
            <div className="p-3 xl:px-9  xl:space-x-4 space-x-2 text-xs xl:text-2xl">
                <Link href="http://localhost:3000">Home</Link>
                <Link href="localhost:3000">Offers</Link>
                <Link href="localhost:3000">Campaigns</Link>
            </div>
            <SearchFrame query={searchParams?.q} />
        </>
    )
}