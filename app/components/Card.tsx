import Link from "next/link";
import React from "react";
interface Product {
  data: {
    id: string;
    productName: string;
    material: string;
    price: string;
    description: string;
    availability: number;
    photos: string[];
  };
}
const Card = (props: Product) => {
  const data = "bruh";
  console.log(props);

  return (
    <div className="flex flex-col justify-between rounded-lg px-3 py-2 m-2 hover:shadow-lg w-[300px] font-contractica-light bg-slate-200 ">
      <img className="" src={props.data.photos[0]} alt="" />
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 my-2">
            {props.data.productName}
          </h3>
          <h4>მასალა: {props.data.material}</h4> <hr />
          <h4>ფასი: 50₾</h4>
        </div>
        <button className="p-3 h-10 w-14 text-white rounded-md bg-slate-500 ">
          <Link
            href={{
              pathname: "/product",
              query: { saxeli: props.data.productName, id: "1" },
            }}
          >
            მეტი
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
