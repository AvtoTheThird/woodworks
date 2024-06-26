"use client";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Footer from "../components/Footer";
interface Product {
  id: string;
  productName: string;
  material: string;
  price: string;
  description: string;
  sort: number | "";
  photos: string[];
}
async function getProducts() {
  const querySnpshot = await getDocs(collection(db, "products"));

  const data: Product[] = [];
  querySnpshot.forEach((doc) => {
    data.push({
      productName: doc.data().productName,
      material: doc.data().material,
      description: doc.data().description,
      id: doc.data().id,
      price: doc.data().price,
      sort: doc.data().sort,
      photos: doc.data().photos,
    });
  });

  return data;
}

const Store = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  useEffect(() => {
    async function fetchData() {
      const fetchedProducts = await getProducts();
      const sortedProducts = fetchedProducts.sort((a, b) => {
        if (a.sort < b.sort) {
          return -1;
        }
        if (a.sort > b.sort) {
          return 1;
        }
        return 0;
      });
      setProducts(sortedProducts);
    }
    fetchData();
  }, []);
  return (
    <main className="flex flex-col items-center justify-start ">
      <Navbar />
      {products.length === 0 ? (
        <div className="z-10 lg:w-4/6 w-5/6 items-center justify-center h-[50vh] text-sm lg:flex flex-wrap bg-gray-100 rounded-md  ">
          <h1 className="text-center text-3xl font-black">
            ინფორმაცია იტვირთება
          </h1>
        </div>
      ) : (
        ""
      )}
      <div className="z-10 lg:w-4/6 w-5/6 items-start justify-between  text-sm lg:flex flex-wrap bg-gray-100 rounded-md  ">
        {products.map((prod, index) => {
          return <Card data={prod} key={index} />;
        })}
      </div>
      <Footer />
    </main>
  );
};

export default Store;
