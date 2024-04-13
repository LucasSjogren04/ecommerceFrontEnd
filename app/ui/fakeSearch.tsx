'use client';
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useAdminContext } from "../provider";
import { useEffect } from "react";
 
export default function FakeSearch({ placeholder }: { placeholder: string }) {
  const { searchValue, setsearchValue, setDoneInitialSearch } = useAdminContext()
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const router = useRouter();
  setDoneInitialSearch(false);

  function handleSearch(term: string) {
    setsearchValue(term);
  }

  const handleKeyPress = (event:any) => {
    if (event.key === 'Enter') {
      setDoneInitialSearch(false);
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
    <div className="flex flex-col p-4">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-40 xl:w-96 rounded border border-gray-200 p-2 xl:p-3 text-xs  xl:text-2xl outline-2 xl:outline-8 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchValue}
      />
    </div>
  );
}