import Link from "next/link";
import React from "react";

const Card = () => {
  const data = "bruh";
  return (
    <div className="flex flex-col justify-between rounded-lg px-3 py-2 m-2 hover:shadow-lg w-[300px] font-contractica-light bg-slate-200 ">
      <img
        className=""
        src="https://www.woodenearth.com/cdn/shop/articles/handmade-wooden-plates_1024x1024.png?v=1676902772"
        alt=""
      />
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 my-2">
            ხის ტარილი
          </h3>
          <h4>მასალა: კაკალი</h4> <hr />
          <h4>ფასი: 50₾</h4>
        </div>
        <button className="p-3 h-10 w-14 text-white rounded-md bg-slate-500 ">
          <Link
            href={{ pathname: "/product", query: { saxeli: "data", id: "1" } }}
          >
            მეტი
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
