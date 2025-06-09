"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SignInForm from '@/components/signin';


interface MenuItem {
  title: string;
  categories?: {
    title: string;
    items: string[];
  }[];
  hasSubmenu?: boolean;
}

interface ImageData {
  src: string;
  name: string;
  price: string;
}

interface SportData {
  src: string;
  link: string;
  name: string;
}

interface FooterData {
  Resources: { title: string; url: string }[];
  Support: { title: string; url: string }[];
  AboutUs: { title: string; url: string }[];
}

const App: React.FC = () => {
  const [loadingComplete, setLoadingComplete] = useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [showUserDropdown, setShowUserDropdown] = useState<boolean>(false);
  const [showSignIn, setShowSignIn] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  const renderDropdown = (title: string, categories: { title: string; items: string[] }[]) => (
<div className="absolute top-full left-0 mt-3 bg-[#EEE1C6] shadow-xl rounded-lg z-50 min-w-[200px] p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
      <div className="flex gap-2 p-2">
        {categories.map((category, index) => (
          <div className="flex-1 min-w-[200px]" key={index}>
            <h3 className="text-lg font-bold text-[#131212] mb-2 uppercase pb-2 border-b-2 border-[#f0f0f0]">
              {category.title}
            </h3>
            {category.items.map((item, subIndex) => (
              <div 
                className="py-2 text-sm text-[#855E42] transition-all duration-200 relative cursor-pointer hover:text-gray-900 hover:pl-1 hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gray-900 after:transition-all after:duration-200 hover:after:w-full" 
                key={subIndex}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  const menuItems: MenuItem[] = [
    {
      title: 'Men',
      categories: [
        {
          title: 'Shoes',
          items: ['New Releases', 'Running', 'Basketball', 'Football', 'Training & Gym', 'Lifestyle'],
        },
        {
          title: 'Clothing',
          items: ['T-Shirts & Tops', 'Hoodies & Sweatshirts', 'Jackets', 'Shorts', 'Tracksuits'],
        },
        {
          title: 'Accessories',
          items: ['Bags & Backpacks', 'Socks', 'Hats & Headwear'],
        },
      ],
    },
    {
      title: 'Women',
      categories: [
        {
          title: 'Shoes',
          items: ['New Releases', 'Running', 'Training & Gym', 'Lifestyle', 'Walking'],
        },
        {
          title: 'Clothing',
          items: ['Sports Bras', 'Leggings & Tights', 'Hoodies & Sweatshirts', 'Jackets', 'Dresses & Skirts'],
        },
        {
          title: 'Accessories',
          items: ['Bags & Backpacks', 'Headbands & Wristbands', 'Sports Equipment'],
        },
      ],
    },
    {
      title: 'Kids',
      categories: [
        {
          title: 'Shoes',
          items: ['Boys Shoes', 'Girls Shoes', 'Baby & Toddler', 'Lifestyle'],
        },
        {
          title: 'Clothing',
          items: ['Boys Clothing', 'Girls Clothing', 'Baby & Toddler', 'Kids Sets'],
        },
        {
          title: 'Accessories',
          items: ['Bags & Backpacks', 'Socks', 'Hats & Caps'],
        },
      ],
    },
    {
      title: 'Sale',
      categories: [
        {
          title: 'Featured',
          items: ['Shop All Sale', 'Limited Time Deals', 'Last Sizes'],
        },
        {
          title: 'Sale by Category',
          items: ['Shoes Sale', 'Clothing Sale', 'Accessories Sale'],
        },
        {
          title: 'Sale by Sport',
          items: ['Running Sale', 'Football Sale', 'Basketball Sale'],
        },
      ],
    },
  ];

  const mobileMenuItems: MenuItem[] = [
    { title: 'New & Featured', hasSubmenu: true },
    { title: 'Men', hasSubmenu: true },
    { title: 'Women', hasSubmenu: true },
    { title: 'Kids', hasSubmenu: true },
    { title: 'Sale', hasSubmenu: true },
    { title: 'SNKRS', hasSubmenu: false }
  ];

  const imagesData: ImageData[] = [
    {
      src: 'https://images.contentstack.io/v3/assets/blt87aba3e59f007e40/blt97c5eb8a32f63263/68412e4373466cd8859f3c95/shoe1.jpg',
      name: 'AIR JORDAN 1',
      price: '$120',
    },
    {
      src: 'https://images.contentstack.io/v3/assets/blt87aba3e59f007e40/bltcc52763ad2429af7/68412e43df13926c94f5e52e/shoe2.png',
      name: 'AIR FORCE 1',
      price: '$100',
    },
    {
      src: 'https://images.contentstack.io/v3/assets/blt87aba3e59f007e40/blt71f40a0a5a9b672f/68412e43d6b7cb4ec221503a/sh3.png',
      name: 'DUNKS',
      price: '$150',
    },
    {
      src: 'https://images.contentstack.io/v3/assets/blt87aba3e59f007e40/bltaf514d4fbc229c85/68412e43aa31f73a7b1b3ad5/sh4.png',
      name: 'VAPORFLY',
      price: '$90',
    },
    {
      src: 'https://images.contentstack.io/v3/assets/blt87aba3e59f007e40/blt67372f1fc3e3c988/68412e4321ef7a19ab1879d2/sh5.jpg',
      name: 'VOMERO',
      price: '$130',
    },
    {
      src: 'https://images.contentstack.io/v3/assets/blt87aba3e59f007e40/blta87cf477ebbe5502/68412e42afd14d1f246291bf/sh6.jpg',
      name: 'KILLSHOT',
      price: '$110',
    },
  ];

  const sportData: SportData[] = [
    {
      src: 'https://images.contentstack.io/v3/assets/blt87aba3e59f007e40/blt48715ef7190f8b29/68412e71d82e665debed7956/spt1.jpg',
      link: '/running',
      name: 'Running',
    },
    {
      src: 'https://images.contentstack.io/v3/assets/blt87aba3e59f007e40/blte952abe0846c4520/68412e7121ef7a62251879d6/spt2.jpg',
      link: '#',
      name: 'Football',
    },
    {
      src: 'https://images.contentstack.io/v3/assets/blt87aba3e59f007e40/bltb357216b3dd8ca1d/68412e7173466c3e999f3c9a/spt3.jpg',
      link: '#',
      name: 'Tennis',
    },
    {
      src: 'https://images.contentstack.io/v3/assets/blt87aba3e59f007e40/blt4646e90073599139/68412e71ef5e82b8df197852/spt4.jpg',
      link: '#',
      name: 'Basketball',
    },
    {
      src: 'https://images.contentstack.io/v3/assets/blt87aba3e59f007e40/blt67d391f32455d299/68412e71116bcfcbd0220cea/spt5.jpg',
      link: '#',
      name: 'Training and Gym',
    },
    {
      src: 'https://images.contentstack.io/v3/assets/blt87aba3e59f007e40/blta54ca3ca84a9399e/68412e7102d9011a5f1f53ff/spt6.jpg',
      link: '#',
      name: 'Dance',
    },
  ];

  const footerData: FooterData = {
    Resources: [
      { title: 'Find A Store', url: '#' },
      { title: 'Become A Member', url: '#' },
      { title: 'Send Us Feedback', url: '#' }
    ],
    Support: [
      { title: 'Get Help', url: '#' },
      { title: 'Order Status', url: '#' },
      { title: 'Delivery', url: '#' },
      { title: 'Returns', url: '#' },
      { title: 'Payment Options', url: '#' },
      { title: 'Contact Us On Nike.com Inquiries', url: '#' },
      { title: 'Contact Us On All Other Inquiries', url: '#' }
    ],
    AboutUs: [
      { title: 'About Nike', url: '#' },
      { title: 'News', url: '#' },
      { title: 'Careers', url: '#' },
      { title: 'Investors', url: '#' },
      { title: 'Sustainability', url: '#' },
      { title: 'Report a Concern', url: '#' }
    ]
  };

  return (
    <div className="m-0 p-0 w-full min-h-screen font-sans overflow-x-hidden">
      
      {/* Move the sign-in modal block here */}
      {showSignIn && (
        <div className="fixed inset-0 z-[100] bg-white overflow-auto">
          <SignInForm />
          <button 
            onClick={() => setShowSignIn(false)} 
            className="absolute top-4 right-4 text-black text-xl font-bold z-50"
          >
            ×
          </button>
        </div>
      )}

      {!loadingComplete ? (
        <div className="flex justify-center items-center h-screen bg-black">
          <img 
            src="https://images.contentstack.io/v3/assets/blt87aba3e59f007e40/bltf77abaeef82da584/68412ed754b053d36c3f62bd/logo.png" 
            alt="Nike Logo" 
            className="w-48 animate-pulse"
          />
        </div>
      ) : (
        <>
          {/* Mobile Menu */}
          <div className={`fixed top-8 right-0 w-80 h-2/5 bg-yellow-100 z-50 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'transform -translate-x-80' : 'transform translate-x-0'} md:hidden`}>
            <div className="p-auto border-b-2 border-gray-300 flex justify-end">
              <button 
                className="bg-transparent border-none text-2xl cursor-pointer p-2 text-gray-900" 
                onClick={toggleMobileMenu}
              >
                ×
              </button>
            </div>
            <nav className="py-4">
              {mobileMenuItems.map((item, index) => (
                <div key={index} className="px-6 py-4 flex justify-between items-center cursor-pointer text-base text-gray-900 border-b border-amber-900">
                  <span>{item.title}</span>
                  {item.hasSubmenu && <span className="text-sm text-gray-600">›</span>}
                </div>
              ))}
            </nav>
          </div>

          {/* Overlay */}
          {isMobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
              onClick={toggleMobileMenu} 
            />
          )}

          <div className="flex flex-col justify-start items-center min-h-screen bg-[#f8ecd7] text-center m-0 p-5 overflow-auto">
            {/* Navbar */}
            <div className="flex justify-between items-center px-5 py-2 bg-[#f8ecd7] text-black fixed top-0 left-0 right-0 z-30">
              <div className="flex items-center">
                <img src="https://images.contentstack.io/v3/assets/blt87aba3e59f007e40/blt8f0c0013626d54ef/68412ed7ba5842a30d762e4f/logo1.png" alt="Nike Logo" className="w-20 h-auto mr-5" />
                <div className="hidden md:flex ml-10 gap-4">
                  {menuItems.map((menu, index) => (
                    <span className="relative group text-lg cursor-pointer text-gray-900 uppercase font-semibold py-5 after:content-[''] after:inline-block after:w-1.5 after:h-1.5 after:border-r-2 after:border-b-2 after:border-gray-900 after:ml-2 after:transform after:rotate-45 after:relative after:-top-0.5" key={index}>
                      {menu.title}
                      {renderDropdown(menu.title, menu.categories || [])}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center relative">
  <div 
    className="w-6 h-6 ml-4 cursor-pointer text-black md:w-6" 
    onClick={toggleSearchBar}
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth="1.5" 
      stroke="currentColor" 
      className="w-full h-full"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
      />
    </svg>
  </div>

  <input
    type="text"
    className={`h-8 px-2 border-2 border-yellow-600 rounded-3xl text-sm transition-all duration-300 ${showSearchBar ? 'w-24 opacity-100 visible' : 'w-0 opacity-0 invisible'}`}
    placeholder="Search..."
  />
</div>

                <div className="relative">
  <div 
    onClick={toggleUserDropdown}
    className="w-8 h-7 ml-1 cursor-pointer relative z-20 hover:opacity-80 md:w-8 text-black"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth="1.5" 
      stroke="currentColor" 
      className="w-full h-full"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" 
      />
    </svg>
  </div>

  {/* User Dropdown */}
  {showUserDropdown && (
    <div className={`absolute top-9 -left-5 bg-[#856842] rounded-lg shadow-xl w-25 h-20 z-5 transition-all duration-300 ${showUserDropdown ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-5'}`}>
      <ul className="list-none p-0 m-0">
        <li className="px-5 py-2 border-b border-gray-300 transition-colors duration-300 hover:bg-[#e3cba3] last:border-b-0">
<span 
  onClick={() => {
    setShowUserDropdown(false);
    setShowSignIn(true);
  }} 
  className="no-underline text-gray-50 text-sm block transition-colors duration-300 hover:text-black cursor-pointer"
>
  Sign In
</span>        </li>
        <li className="px-5 py-2 border-b border-gray-300 transition-colors duration-300 hover:bg-[#e3cba3] last:border-b-0">
          <Link href="/signup" className="no-underline text-gray-50 text-sm block transition-colors duration-300 hover:text-black">Sign Up</Link>
        </li>
        {/* <li className="px-3 py-2 border-b border-gray-300 transition-colors duration-300 hover:bg-yellow-200 last:border-b-0">
          <Link href="/" className="no-underline text-gray-50 text-sm block transition-colors duration-300 hover:text-black">Sign Out</Link>
        </li> */}
      </ul>
    </div>
  )}
</div>

                <div 
  onClick={toggleMobileMenu}
  className="w-8 h-8 ml-4 cursor-pointer text-black md:w-6"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth="1.5" 
    stroke="currentColor" 
    className="w-full h-full"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" 
    />
  </svg>
</div>

              </div>
            </div>

            {/* Main Content */}
            <div className="text-center p-2 mt-20">
              <div className="flex justify-center items-center w-full h-[60vh] m-0 p-0 overflow-hidden">
                <video
                  className="max-w-full max-h-full w-full h-auto object-contain rounded-lg"
                  src="https://assets.contentstack.io/v3/assets/blt87aba3e59f007e40/blt4c58437e763dcec1/68415ab9426b2a985e585f05/videoplayback.mp4"
                  muted
                  autoPlay
                  loop
                ></video>
              </div>
              <div className="text-center p-2">
                <h4 className="mt-2 text-base text-gray-600 mb-0 uppercase">Nike Air</h4>
                <h4 className="font-black text-3xl text-black uppercase leading-none mt-1 flex flex-col items-center gap-0 font-bold">
                  Get Comfortable With <span className="block font-bold">Winning</span>
                </h4>
                <p className="text-lg text-gray-600 font-semibold mt-1 uppercase">Comfort you want with support you need to power your wins.</p>
                <button className="bg-gray-900 text-white mt-1 px-4 py-2 rounded-full border-2 border-gray-900 text-sm font-medium cursor-pointer transition-all duration-300 uppercase tracking-wider relative overflow-hidden z-10 before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-white before:transition-all before:duration-300 before:z-[-1] hover:text-gray-900 hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:before:w-full">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Image Carousel */}
            <div className="mt-5 p-5 bg-[#f8ecd7] flex flex-col items-start">
  <h2 className="text-left text-2xl font-bold text-gray-800 mb-2 w-full">
    New Arrivals
  </h2>

  <div
    className="flex gap-5 overflow-x-auto overflow-y-hidden py-1 scroll-smooth justify-start scrollbar-thumb-amber-800 scrollbar-track-yellow-50"
    style={{ maxWidth: '1060px' }}
  >
    {imagesData.map((image, index) => (
      <div
        key={index}
        className="min-w-[250px] max-w-[250px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
      >
        <img src={image.src} alt={image.name} className="w-full h-3/4 rounded-lg" />
        <div className="p-2 text-center bg-yellow-50">
          <h3 className="text-xl font-bold my-2 text-amber-800">{image.name}</h3>
          <p className="text-xl text-gray-600 m-0">{image.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>


            {/* New Section */}
            <div className="w-full mx-auto text-center p-4 bg-[#f8ecd7]">
              <div className="text-left mb-0 ml-[6%] pl-[12%]">
                <h2 className="text-2xl">Don't Miss</h2>
              </div>
              <div className="flex justify-center mb-auto bg-[#f8ecd7]">
                <img 
                  src="https://images.contentstack.io/v3/assets/blt87aba3e59f007e40/bltb0522b438c512c6f/68412ed7d6b7cb7511215040/grd.jpg" 
                  className="w-2/3 h-auto object-cover block" 
                  alt="Featured Product"
                />
              </div>
              <div className="my-1">
                <h4 className="text-xl text-black text-center">Men's Air Jordan 4RM</h4>
                <h4 className="text-4xl font-black text-black text-center">RIDE EASY</h4>
                <h4 className="text-2xl text-black text-center">A new take on the iconic Air Jordan 4</h4>
              </div>
            </div>
              
            {/* Sport Carousel */}
<div className="mt-5 p-5 bg-[#f8ecd7]  w-4/5">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 w-full text-full -ml-120">Shop By Sport</h2>
              <div className="flex gap-5 overflow-x-auto overflow-y-hidden py-1 scroll-smooth w-full justify-start scrollbar-thin scrollbar-thumb-amber-800 scrollbar-track-yellow-50">
                {sportData.map((image, index) => (
                  <div className="relative min-w-[calc(33.33%-20px)] max-w-xs flex-shrink-0 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 group" key={index}>
                    <img src={image.src} alt={image.name} className="w-full h-auto rounded-lg" />
                    <Link 
  href={image.link}
  className="absolute bottom-1 left-15 px-5 py-2 bg-gray-900 text-white text-sm font-bold border-2 border-gray-900 rounded-full cursor-pointer uppercase tracking-wide transition-all duration-300 opacity-0 pointer-events-none z-10 overflow-hidden no-underline group-hover:opacity-100 group-hover:pointer-events-auto group-hover:transform group-hover:-translate-y-0.5 group-hover:shadow-lg before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-white before:transition-all before:duration-300 before:z-[-1] hover:bg-black hover:bg-opacity-90 hover:text-black hover:before:w-full"
>
  {image.name}
</Link>

                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#f8ecd7] p-4 mt-0 border-t-2 border-amber-800 w-full">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium mb-1 text-amber-900">Resources</h3>
                  <ul className="list-none p-0 m-0">
                    {footerData.Resources.map((item, index) => (
                      <li key={index} className="mb-1">
                        <a href={item.url} className="text-gray-600 no-underline text-sm transition-colors duration-200 hover:text-gray-900">{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium mb-1 text-amber-900">Support</h3>
                  <ul className="list-none p-0 m-0">
                    {footerData.Support.map((item, index) => (
                      <li key={index} className="mb-1">
                        <a href={item.url} className="text-gray-600 no-underline text-sm transition-colors duration-200 hover:text-gray-900">{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium mb-1 text-amber-900">About Us</h3>
                  <ul className="list-none p-0 m-0">
                    {footerData.AboutUs.map((item, index) => (
                      <li key={index} className="mb-1">
                        <a href={item.url} className="text-gray-600 no-underline text-sm transition-colors duration-200 hover:text-gray-900">{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;