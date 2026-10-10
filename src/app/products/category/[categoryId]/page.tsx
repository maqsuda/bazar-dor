import PriceCard from "@/components/PriceCard";
import { toBanglaDigits, type ProductTypes } from "@/types/categoryTypes";
import React from "react";

const ProductCategoryPage = async ({
  params,
}: {
  params: { categoryId: string };
}) => {
  const { categoryId } = await params;
  console.log(categoryId);

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
  );
  const data: ProductTypes[] = await res.json();

  // const categoryData=await data[0].categoryNameBn;
  // console.log(categoryData);

  return (
    <div className="w-7xl mx-auto mt-10">
      {/* <div className="flex items-center py-5 px-5 rounded-xl bg-white ">
        <div>
          <p className="rounded-xl text-4xl">{data[0].categoryIcon}</p>
        </div>
        <div>
          <h2 className="font-bold text-4xl">{data[0].categoryNameBn}</h2>
          <p>{toBanglaDigits(data.length)}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
        </div>
      </div> */}

      <div className="flex justify-end items-center py-5 px-5 rounded-xl bg-white mt-5">
        <h2 className="text-xl pr-2">সাজান</h2>
        <select defaultValue="ডিফল্ট" className="select">
          <option disabled={true}>ডিফল্ট</option>
          <option>দাম: কম থেকে বেশি</option>
          <option>দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <h2 className="text-3xl font-bold">সব পণ্য</h2>

      <div className="grid grid-cols-3 gap-5 my-2">
        {data.map((product) => (
          <PriceCard key={product.id} product={product}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryPage;
