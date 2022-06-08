import React from "react";
import Navbar from './components/Navbar';
import Fotter from './components/Footer';
import { LockClosedIcon } from '@heroicons/react/solid'



export default function Example() {
    return (
      <>

      <Navbar />

    {/* 1 */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <a
            href="/"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-5"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h5 className="mb-4 text-4xl font-extrabold leading-none text-violet-600">
            A'ang Kos
            
            
          </h5>
          <p className="mb-6 text-gray-900">
          A'angkos memanfaatkan teknologi untuk berkembang dari aplikasi cari kos menjadi aplikasi yang memudahkan calon anak kos untuk booking properti kos dan juga melakukan pembayaran kos. Saat ini kami memiliki lebih dari 2 juta kamar kos yang tersebar di lebih dari 140 kota di seluruh Indonesia.
          </p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://5ae95aa751d0b3560e57-a7a352e68558f1c60702a734e48ecb00.ssl.cf1.rackcdn.com/u/Deluxe-River-View-Twin-Room-1600x900-new.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    {/* End */}

    {/* 2 */}
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="p-8 rounded shadow-xl sm:p-16 bg-violet-600">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Mau dapat diskon?
              <br className="hidden md:block" />
              Daftarkan diri anda sebagai{' '}
              <span className="inline-block text-deep-purple-accent-400">
              Member A'ang Kos
              </span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="mb-4 text-base text-white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
              perspiciatis unde omnis iste. Sed ut perspiciatis unde omnis iste
              error sit voluptatem accusantium doloremque rem aperiam.
            </p>
            
          </div>
        </div>
      </div>
    </div>
    {/* End */}

    
    {/* 3 */}
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            Area Kos Terpopuler
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
       
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-60"
              src="https://storage.googleapis.com/tempatwisataunik/2016/01/Monas-Jakarta.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Jakarta
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-60"
              src="https://2.bp.blogspot.com/-u5nlNT1vT74/T4-H8ryF3QI/AAAAAAAAAPw/BYyarxq19x0/s1600/GEDUNG+SATE,+BANDUNG.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Bandung
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-60"
              src="https://www.mysweetescapediary.com/wp-content/uploads/2018/05/kota-tua-semarang-1-1024x768.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Semarang
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-60"
              src="http://initu.id/wp-content/uploads/2018/05/Sejarah-Wisata-Kuliner-Purwokerto-Ibu-Kota-Banyumas.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Purwokerto
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-60"
              src="https://www.silverkris.com/wp-content/uploads/2017/11/Suroboyo-Monument.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Surabaya
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-60"
              src="http://wallpapersdsc.net/wp-content/uploads/2017/10/Bali-Gallery.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Bali
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-60"
              src="http://www.easybook.com/images/destination/Indonesia/Palembang/AmperaBridge3.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Palembang
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-60"
              src="https://c4.wallpaperflare.com/wallpaper/395/382/562/bulb-city-indonesia-java-wallpaper-preview.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Yogyakarta
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          See more
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
    {/* End */}
  
    
    {/* 4 */}
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
      <h4 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            Kos Sekitar Kampus
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h4>
        
      </div>
      <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://mamikos.com/assets/logo-kampus/UGM.png"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">UGM</p>
            <p className="text-sm text-gray-800">Jogja</p>
           
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://mamikos.com/assets/logo-kampus/UNDIP.png"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">UNDIP</p>
            <p className="text-sm text-gray-800">Semarang</p>
         
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://mamikos.com/assets/logo-kampus/UI.png"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">UI</p>
            <p className="text-sm text-gray-800">Depok</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://mamikos.com/assets/logo-kampus/UNPAD.png"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">UNPAD</p>
            <p className="text-sm text-gray-800">Jatinagor</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://mamikos.com/assets/logo-kampus/STAN.png"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">STAN</p>
            <p className="text-sm text-gray-800">Jakarta</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://mamikos.com/assets/logo-kampus/UB.png"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">UB</p>
            <p className="text-sm text-gray-800">Malang</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://mamikos.com/assets/logo-kampus/UNAIR.png"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">UNAIR</p>
            <p className="text-sm text-gray-800">Surabaya</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://rekreartive.com/wp-content/uploads/2018/10/Logo-UMP-Universitas-Muhammadiyah-Purwokerto-Original.png.webp"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">UMP</p>
            <p className="text-sm text-gray-800">Purwokerto</p>
          </div>
        </div>
      </div>
    </div>
    {/* End */}
      
    {/* 4 */}
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">LOGIN</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              atau{' '}
              <a href="#" className="font-medium text-violet-600 hover:text-violet-500">
                Daftar jika belum punya akun
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-violet-600 hover:text-violet-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-violet-500 group-hover:text-violet-400" aria-hidden="true" />
                </span>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    {/* End */}


      <Fotter/>
      </>
    )
  }
  