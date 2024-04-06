import Search from "./ui/search";
import AdminProductTable from "./ui/adminProductTable";
import { SearchForProducts } from "./lib/data";
import API_URL from "./config";
import { Suspense } from "react";
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query: string;
  };
}) {
  const query = searchParams?.query || '';

    
  
  
  return (
    <>
      <div className=""></div>
      <Search placeholder="Search products..." />

    </>
  )
}
