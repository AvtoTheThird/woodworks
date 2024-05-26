import React from "react";
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
async function fetchProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products: Product[] = [];
  querySnapshot.forEach((doc) => {
    products.push({
      id: doc.id, // Ensure you capture the document ID properly
      productName: doc.data().productName,
      material: doc.data().material,
      price: doc.data().price,
      description: doc.data().description,
      sort: doc.data().sort,
      photos: doc.data().photos,
    });
  });
  return products;
}

const Store = async () => {
  const products = await fetchProducts();
  const sortedProducts = products.sort((a, b) => (a.sort < b.sort ? -1 : 1));

  return (
    <main className="flex flex-col items-center justify-start">
      <Navbar />

      <div className="z-10 lg:w-4/6 w-5/6 items-start justify-between text-sm lg:flex flex-wrap bg-gray-100 rounded-md">
        {sortedProducts.map((prod, index) => (
          <Card data={prod} key={index} />
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default Store;
