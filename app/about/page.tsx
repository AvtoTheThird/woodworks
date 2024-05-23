import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const about = () => {
  return (
    <div className="flex flex-col  items-center h-screen">
      <title>ჩვენს შესახებ</title>

      <Navbar />
      <div className="flex justify-center flex-col items-center">
        <div className="z-10 lg:w-4/6 w-5/6 lg:h-[50vh]  font-mono text-sm flex flex-col justify-center gap-5 bg-gray-100 rounded-md p-6">
          <span className="text-xl font-bold font-contractica-medium text-center  ">
            ჩვენს შესახებ
          </span>
          <span className="text-base font-contractica-regular text-center  block ">
            ხის ხელნაკეთი ნივთების ონლაინ მაღაზია. მაღაზია ფუნქციონირებს გორში.
            ჩვენთან შეგიძლიათ შეიძინოთ სხვა და სხვა ხმელი ხის მასალისგან
            დამზადებული ნებისმიერი ძველი ქართული ტრადიციული ხის ჭურჭელი. ასევე
            დეკორატიული ნივთები ინტერიერის, ბუხრის ოთახის, სარდაფის მოსაწყობად.
            შეგიძლიათ შეგვიკვეთოთ ნებისმერი ფორმის და დიზაინის ნივთი რომლის
            დამზადება შესაძლებელი ხელით და/ან სახარატო დაზგის მეშვეობით.
            მიწოდება გორში უფასოა შეკვეთიდან 5 სამუშაო დღეში. შესაკვრთად
            გადმოდით{" "}
            <a
              target="_blank"
              className="text-blue-500"
              href="https://www.facebook.com/profile.php?id=61558711873128"
            >
              ლინკზე
            </a>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default about;
