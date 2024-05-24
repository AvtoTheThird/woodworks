"use client";
import React, { useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import EditingCard from "../components/EditingCard";
import Navbar from "../components/Navbar";
interface Product {
  id: string;
  productName: string;
  material: string;
  price: string;
  description: string;
  // availability: number;
  photos: string[];
  sort: number | "";
}
async function getProducts() {
  const querySnpshot = await getDocs(collection(db, "products"));

  const data: Product[] = [];
  querySnpshot.forEach((doc) => {
    data.push({
      productName: doc.data().productName,
      material: doc.data().material,
      description: doc.data().description,
      id: doc.id,
      price: doc.data().price,
      sort: doc.data().sort,
      photos: doc.data().photos,
    });
  });

  return data;
}

function page() {
  const [products, setProducts] = React.useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    }
    fetchData();
  }, []);
  console.log(products);

  return (
    <main className="flex flex-col items-center justify-start ">
      <Navbar />

      <div className="z-10 lg:w-4/6 w-5/6 items-start justify-between  text-sm lg:flex flex-wrap bg-gray-100 rounded-md  ">
        {products.map((prod, index) => {
          return <EditingCard data={prod} key={index} />;
        })}
      </div>
    </main>
  );
}

export default page;
