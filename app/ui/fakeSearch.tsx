'use client';
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useAdminContext } from "../provider";
import { useEffect } from "react";
 
export default function FakeSearch({ placeholder }: { placeholder: string }) {
  const { searchValue, setsearchValue } = useAdminContext()
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const router = useRouter();


  function handleSearch(term: string) {
    setsearchValue(term);
  }

  const handleKeyPress = (event:any) => {
    if (event.key === 'Enter') {
      router.push('/search');
    }
  };

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);
 
  return (
    <div className="relative flex flex-1 flex-shrink-0 py-5">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchValue}
      />
    </div>
  );
}