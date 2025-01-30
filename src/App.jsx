import logo from "./logo.svg";
import "./App.css";
import { FaSpotify } from "react-icons/fa";
import Test from "./component/Test";
import DarazMallCard from "./component/DarazMallCard";
import { Card } from "./component/Card";
import Header from "./component/Header";
import Box from "./Box";
import React from "react";
function App() {
  const num = [1, 2, 4, 5];
  const MallData = [
    {
      mainImg:
        "https://static-01.daraz.com.np/p/6444c6f7399826bea8374ee6519e4d7f.jpg",
      catImg:
        "https://static-01.daraz.com.np/other/shop/9f0117c0d76301bde6a979554feff8b1.jpeg",
      Category: "Fun station",
      description: "No 1 toy shop in nepal",
    },
    {
      mainImg:
        "https://static-01.daraz.com.np/p/5db32be7ce1774aad6b27dcbb087e0d2.jpg",
      catImg:
        "https://static-01.daraz.com.np/other/shop/5c12b250eaad850d5d7d28f8ca7f5a6c.png",
      Category: "Philips",
      description: "innovating you",
    },
  ];
  const cardData = [
    {
      image:
        "https://static-01.daraz.com.np/p/25f975a7919c14a153b568a08a024302.png",
      detail: "Brooms, Mops & Sweepers",
    },
    {
      image:
        "https://static-01.daraz.com.np/p/68b7b8a4b182515693c9fd33fe111ab5.jpg",
      detail: "universit",
    },
  ];
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <Header tittle="Eagle" btn="Login" btn2="Register" />
      <h1 className="text-2xl my-4 font-bold">Flash Sales</h1>
      <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-5">
        <Test
          itemname="shirt"
          price="1200"
          image="https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg"
        />

        <Test
          itemname="Goodluck Tortoise Agarbatti Stand Axia Krafts"
          price="120000"
          image="https://static-01.daraz.com.np/p/f899ba61507bb5de4ebda57d5b56dd10.jpg"
        />

        <Test
          itemname="Amul Delicious Margarine 500gm"
          price="120000"
          image="https://static-01.daraz.com.np/p/c4d48604c5e8d054137bd9255e2a6db0.jpg"
        />
        <Test
          itemname="laptop"
          price="120000"
          image="https://www.btplanet.com.np/storage/backend/assets/images/product/1615356731D8aE-Slim-3i.jpg"
        />
        <Test
          itemname="laptop"
          price="120000"
          image="https://www.btplanet.com.np/storage/backend/assets/images/product/1615356731D8aE-Slim-3i.jpg"
        />
        <Test
          itemname="laptop"
          price="120000"
          image="https://www.btplanet.com.np/storage/backend/assets/images/product/1615356731D8aE-Slim-3i.jpg"
        />
        <Test
          itemname="laptop"
          price="120000"
          image="https://www.btplanet.com.np/storage/backend/assets/images/product/1615356731D8aE-Slim-3i.jpg"
        />
      </div>

      {/* next component design  */}
      <h1 className="text-2xl my-4 font-bold">Daraz Mall</h1>
      <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-5">
        {MallData.map((item) => (
          <DarazMallCard
            Category={item.Category}
            description={item.description}
            catImg={item.catImg}
          />
        ))}
      </div>

      {/* next component */}
      <h1 className="text-2xl my-4 font-bold">categories</h1>
      <div className="grid grid-col">
        {cardData.map((item) => (
          <Card image={item.image} detail={item.detail} />
        ))}
      </div>

      <Box />
    </div>
  );
}

export default App;
