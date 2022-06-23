import Navbar from './components/Navbar'
import Foter from './components/Footer'
import Axios from "axios";
import React, { useState, useEffect } from "react";



export default function Example() {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    Axios.get(`https://raw.githubusercontent.com/devinxyz/Api/main/products`)
      .then((res) => {
        const data = res.data;
        setProduct(data.products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };


    return (
        <>

        <Navbar/>
        
        {/* 1 */}
      <div className="relative">
        <img
          src="https://arsitagx-master-article.s3-ap-southeast-1.amazonaws.com/article-photo/245/Kamar-Tidur-Foto-3.jpeg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Kamar megah dengan fasilitas yang mewah serta minimalis hanya di <span className="text-violet-600">A'ang Kos</span> 
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                  quae.
                </p>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* End */}

      {/* 2 */}
    
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-teal-500 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Kamar</span>
          </span>{' '}
          Kos dengan fasilitas yang minimalis
        </h2>
      </div>

      {/* Kamar */}

      <div className="grid gap-5 row-gap-5 mb-8 pt-6 lg:grid-cols-4 sm:grid-cols-2">
      {product.map((products) => (
        <a
          key={product.id} href={product.href}
          className="inline-block overflow-hidden group duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
        >
          <div className="flex flex-col h-full">
            <img
              src={products.url}
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b">
              <div className="p-5">
                <h6 className="mb-2 font-semibold leading-5">
                {products.nama}
                </h6>
                <p className="text-sm text-gray-900">
                {products.tipe} <span className='font-semibold text-green-500'>{products.stok}</span>
                </p>
                <p className="text-sm text-gray-400 mt-2">
                {products.keterangan}
                </p>
                <p className='text-sm text-violet-600 font-bold mt-2'>
                {products.harga}
                </p>
              </div>
            </div>
          </div>
        </a>
      ))}
      </div>
      
      <div className="text-center">
        
      </div>
    </div>
  
      {/* End */}
      <Foter/>
      </>
    );
  };