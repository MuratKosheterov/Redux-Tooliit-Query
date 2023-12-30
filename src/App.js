import React, { useState } from "react";
import { useGetSinglePageQuery } from "./redux/productsApi";

function App() {
  const [inputProduct, setInputProduct] = useState("");
  const { data, isLoading } = useGetSinglePageQuery(inputProduct);

  console.log(data);

  if (isLoading)
    return (
      <h3 className=" text-7xl flex justify-center m-auto h-screen text-center items-center">
        loading...
      </h3>
    );

  return (
    <div className=" bg-slate-500 overflow-hidden ">
      <h1 className="text-center py-5 bg-pink-200 text-xl uppercase">
        Redux-Toolkit Query
      </h1>
      <input
        onChange={(e) => setInputProduct(e.target.value)}
        className="  p-5 m-5 "
        type="text"
        placeholder="Search product..."
      />

      <div className="flex flex-wrap   p-10 gap-5  ">
        {data.products.map((item) => {
          return (
            <div
              key={item.id}
              className=" h-[320px] bg-white w-[320px] mx-auto   border  p-14 "
            >
              <img
                className=" h-[200px] w-[200px] "
                src={item.images[0]}
                alt=""
              />
              <p>{item.title.slice(0, 22)}...</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
