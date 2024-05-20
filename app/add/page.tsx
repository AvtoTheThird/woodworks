"use client";
import React, { useState } from "react";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
interface ProductFormData {
  productName: string;
  material: string;
  price: string;
  description: string;
  availability: number | "";
  photos: FileList | null;
}

const initialFormData: ProductFormData = {
  productName: "",
  material: "",
  price: "",
  description: "",
  availability: "",
  photos: null,
};

const ProductForm: React.FC = () => {
  // const [imageUrls, setImageUrls] = useState([]);

  const [formData, setFormData] = useState<ProductFormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFormData({ ...formData, photos: files });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(formData.photos);
    try {
      const Urls = formData.photos ? await uploadImages(formData.photos) : [];
      // console.log(Urls);
      const docRef =
        Urls.length > 0
          ? await addDoc(collection(db, "products"), {
              ...formData,
              photos: Urls,
            })
          : null;
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    setFormData(initialFormData);
  };

  const uploadImages = async (files: FileList) => {
    const imageUrls: string[] = [];
    for (const file of Array.from(files)) {
      const imageRef = ref(storage, `product-images/${file.name}`);
      await uploadBytes(imageRef, file).then(async (snapshot) => {
        await getDownloadURL(snapshot.ref).then((url) => {
          // console.log(url);
          imageUrls.push(url);
          // setImageUrls((prev): any => [...prev, url]);
        });
      });
    }

    return imageUrls;
  };
  // console.log(imageUrls);

  return (
    <main className="bg-gray-800 h-screen text-indigo-100">
      <div className="max-w-md mx-auto ">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="productName" className="block mb-1">
              Product Name:
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className=" w-full  bg-slate-500 border-gray-500 rounded-md px-3 py-2 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] "
              required
            />
          </div>
          <div>
            <label htmlFor="material" className="block mb-1">
              Material:
            </label>
            <input
              type="text"
              id="material"
              name="material"
              value={formData.material}
              onChange={handleChange}
              className=" w-full bg-slate-500  border-gray-300 rounded-md px-3 py-2 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
              required
            />
          </div>
          <div>
            <label htmlFor="price" className="block mb-1">
              price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className=" w-full bg-slate-500  border-gray-300 rounded-md px-3 py-2 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-1">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className=" w-full bg-slate-500  border-gray-300 rounded-md px-3 py-2 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
              required
            />
          </div>
          <div>
            <label htmlFor="availability" className="block mb-1">
              Availability:
            </label>
            <input
              type="number"
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className=" w-full bg-slate-500  border-gray-300 rounded-md px-3 py-2 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
              required
            />
          </div>
          <div>
            <label htmlFor="photos" className="block mb-1">
              Photos:
            </label>
            <input
              type="file"
              id="photos"
              name="photos"
              onChange={handlePhotoChange}
              className=" w-full bg-slate-500  border-gray-300 rounded-md px-3 py-2 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
              multiple
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default ProductForm;
