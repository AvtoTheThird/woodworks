import Link from "next/link";
import React from "react";
interface Product {
  data: {
    id: string;
    productName: string;
    material: string;
    price: string;
    description: string;
    sort: number | "";
    photos: string[];
  };
}

const Card = (props: Product) => {
  return (
    <Link
      href={{
        pathname: "/product",
        query: {
          id: props.data.id,
          productName: props.data.productName,
          material: props.data.material,
          price: props.data.price,
          description: props.data.description,
          sort: props.data.sort,
          photos: props.data.photos,
        },
      }}
    >
      <div className="flex flex-col justify-between rounded-lg px-3 py-2 m-2 hover:shadow-lg w-[300px] font-contractica-light bg-slate-200 ">
        <img
          className="h-[200px] object-cover"
          src={props.data?.photos[0]}
          alt={"ხის " + props.data.productName}
        />
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 my-2">
              {props.data.productName}
            </h3>
            <h4>მასალა: {props.data.material}</h4> <hr />
            <h4>ფასი: {props.data.price}₾</h4>
          </div>
          <button className="p-3 h-10 w-14 text-white rounded-md bg-slate-500 ">
            მეტი
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
